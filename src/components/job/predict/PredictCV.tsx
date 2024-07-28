import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SmallButton } from "@/components/ui/small_button";

export default function PredictionsCV(prediction: any) {
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
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionContent>
    <div className="grid space-y-8 justify-items-center">
      <div className="bg-background rounded-xl shadow-xl p-8 w-full max-w-[70vw]">
        <div className="grid w-full justify-items-center space-y-4 text-center text-pretty">
          <p>
            Berdasarkan prompt yang anda berikan, pekerjaan yang cocok dengan
            anda adalah
          </p>
          <h3 className="text-4xl font-bold ">{data.prediksi_utama.job}</h3>
          <p>{data.job_description}</p>
          <Link href={`/jobs/${replaceSlashesWithHyphens(data.prediksi_utama.job)}`}>
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
              parseFloat(converter(data.rekomendasi_lain[number].similarity_percentage)) ===
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
                {data.rekomendasi_lain[number].job}
              </div>
              <Link href={`/jobs/${replaceSlashesWithHyphens(data.rekomendasi_lain[number].job)}`}>
                <Button>Cari lowongan</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AccordionContent>
        <SmallButton
          asChild
          className="bg-background hover:bg-background text-primary rounded-none mr-4"
        >
          <AccordionTrigger>Results</AccordionTrigger>
        </SmallButton>
      </AccordionItem>
    </Accordion>
  );
}
