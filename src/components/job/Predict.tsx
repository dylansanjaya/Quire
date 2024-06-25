import Link from "next/link";
import { Button } from "../ui/button";

export default async function Predictions(prompt: any) {
  console.log(prompt.prompt);
  const res = await fetch(
    "https://quire-job-recommender-6mcqyfdvaa-et.a.run.app/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: prompt.prompt }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  function converter(similarities: number) {
    let convertDecimal = similarities * 100;

    let numString = convertDecimal.toString();
    let firstFourDigits = numString.substring(0, 4);

    return `${firstFourDigits}%`;
  }

  const numbers = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="grid space-y-8 justify-items-center">
      <div className="bg-background rounded-xl shadow-xl p-8 w-1/2">
        <div className="grid w-full justify-items-center space-y-4">
          <div>
            Berdasarkan prompt yang anda berikan, pekerjaan yang cocok dengan
            anda adalah
          </div>
          <div className="text-4xl font-bold">{data.predicted_label}</div>
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
              {converter(data.similarities[number])}{" "}
            </div>
            <div className="text-4xl font-bold">
              {data.recommended_labels[number]}
            </div>
            <Link href={`${data.recommended_labels[number]}`}>
              <Button>Cari lowongan</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}