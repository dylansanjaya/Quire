import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Predictions(prediction: any) {
  const data = prediction.prediction;

  function replaceSlashesWithHyphens(str: string) {
    return str.replace(/\//g, "-");
  }

  function converter(similarities: number) {
    let convertDecimal = similarities * 100;

    let numString = convertDecimal.toString();
    let firstFourDigits = numString.substring(0, 4);

    return `${firstFourDigits}%`;
  }

  const numbers = Array.from({ length: 4 }, (_, i) => i);

  if (data.length === 0) {
    return (
      <div className="flex w-full justify-center">

      <Alert variant={"default"} className="max-w-96">
        <IoIosInformationCircleOutline className="text-2xl"/>
        <AlertTitle>Perhatian!</AlertTitle>
        <AlertDescription>Prediksi mungkin tidak akurat</AlertDescription>
      </Alert>
      </div>
    );
  }

  return (
    <div className="grid space-y-8 justify-items-center">
      <div className="bg-background rounded-xl shadow-xl p-8 w-full max-w-[70vw]">
        <div className="grid w-full justify-items-center space-y-4 text-center text-pretty">
          <p>
            Berdasarkan prompt yang anda berikan, pekerjaan yang cocok dengan
            anda adalah
          </p>
          <h3 className="text-4xl font-bold ">{data.predicted_label}</h3>
          <p>{data.job_description}</p>
          <Link href={`/jobs/${replaceSlashesWithHyphens(data.predicted_label)}`}>
            <Button>Cari lowongan</Button>
          </Link>
        </div>
      </div>
      <div className="font-bold">Rekomendasi pekerjaan</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[70vw]">
        {numbers.map((number) => (
          <div
            key={number}
            className={`bg-background rounded-xl shadow-xl p-8 w-full ${
              parseFloat(converter(data.recommendations[number].similarity)) ===
              0
                ? "hidden"
                : "block"
            }`}
          >
            <div className="grid w-full justify-items-center space-y-4">
              {/* <div className="text-5xl font-bold">
                {converter(data.recommendations[number].similarity)}
              </div>
              <Progress
                value={parseFloat(
                  converter(data.recommendations[number].similarity)
                )}
              /> */}
              <div className="text-4xl font-bold text-center">
                {data.recommendations[number].label}
              </div>
              <Link href={`/jobs/${replaceSlashesWithHyphens(data.recommendations[number].label)}`}>
                <Button>Cari lowongan</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
