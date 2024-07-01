import Link from "next/link";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";

export default async function Predictions(prompt: any) {
  const res = await fetch(`${process.env.QUIRE_AI}/predict/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: prompt.prompt }),
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  function converter(similarities: number) {
    let convertDecimal = similarities * 100;

    let numString = convertDecimal.toString();
    let firstFourDigits = numString.substring(0, 4);

    return `${firstFourDigits}%`;
  }

  const numbers = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div className="grid space-y-8 justify-items-center">
      <div className="bg-background rounded-xl shadow-xl p-8 w-1/2">
        <div className="grid w-full justify-items-center space-y-4">
          <div>
            Berdasarkan prompt yang anda berikan, pekerjaan yang cocok dengan
            anda adalah
          </div>
          <div className="text-4xl font-bold">{data.predicted_label}</div>
          <p className="text-center">{data.job_description}</p>
          <Link href={`${data.predicted_label}`}>
            <Button>Cari lowongan</Button>
          </Link>
        </div>
      </div>
      <div className="font-bold">Rekomendasi pekerjaan</div>
      {numbers.map((number) => (
        <div
          key={number}
          className="bg-background rounded-xl shadow-xl p-8 w-1/2"
        >
          <div className="grid w-full justify-items-center space-y-4">
            <div className="text-5xl font-bold">
              {converter(data.recommendations[number].similarity)}
            </div>
            <Progress
              value={parseFloat(converter(data.recommendations[number].similarity))}
            />
            <div className="text-4xl font-bold">
              {data.recommendations[number].label}
            </div>
            <Link href={`${data.recommendations[number].label}`}>
              <Button>Cari lowongan</Button>
            </Link>
          </div>
        </div>
      ))} 
    </div>
  );
}
