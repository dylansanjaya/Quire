"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Predictions from "../predict/Predict";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Skeleton } from "@/components/ui/skeleton";
import AccuracyAlert from "@/components/ui/accuracy-alert";
import { SmallButton } from "@/components/ui/small_button";
import LoadingAnimation from "@/components/ui/loading-animation";

export default function StorySearch() {
  const [inputValue, setInputValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  const getPredictions = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true);
    setPredictions([]);
    router.push("/jobs");

    try {
      const res = await fetch(
        `https://ivcobvvrnejydxq-evfpthsuvq-et.a.run.app/predict/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputValue }),
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setPredictions(data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setPredictions([]);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={getPredictions} className="space-y-4">
        <h2 className="font-bold text-xl">Pencarian Story Tell</h2>
        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 w-full">
            <AccuracyAlert />
            <Input
              value={inputValue}
              minLength={10}
              maxLength={1000}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ceritakan pekerjaan impian mu"
            />
          </div>
          <div className="flex grid-cols-2 gap-4 justify-center">
            {/* <Button variant={"outline"} disabled={true}>Filter</Button> */}
            <Button type="submit" disabled={!inputValue || isFetching}>
              {isFetching ? (
                <div className="flex space-x-2 items-center">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  <p>Checking...</p>
                </div>
              ) : (
                `Check`
              )}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-red-500">{error && <p>{error}</p>}</div>
      <div className="mt-8">
        <Predictions prediction={predictions} />
      </div>
    </div>
  );
}
