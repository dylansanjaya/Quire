"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkOnProgress from "@/components/ui/on-progress";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PredictionsCV from "../predict/PredictCV";
import AccuracyAlert from "@/components/ui/accuracy-alert";

export default function CVSearch() {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const getPredictions = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload a file.");
      return;
    }
    setIsFetching(true);
    setPredictions([]);
    router.push("/jobs");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        `https://qure-recommender-cv-6mcqyfdvaa-et.a.run.app/predict`,
        {
          method: "POST",
          body: formData,
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
      <h2 className="font-bold text-xl">Pencarian Scan CV</h2>

      <form onSubmit={getPredictions} className="grid gap-4">
        <div className="sm:flex gap-4 space-y-4 sm:space-y-0 ">
          <div className="flex items-center space-x-4 w-full">
            <AccuracyAlert />
            <Input
              className="self-center"
              id="cv"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex grid-cols-2 gap-4 justify-center">
            {/* <Button variant={"outline"} disabled={true}>Filter</Button> */}
            <Button
              className="justify-self-center"
              type="submit"
              disabled={!file || isFetching}
            >
              {isFetching ? (
                <div className="flex space-x-2 items-center">
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
        {isFetching ? (
          <div className="grid space-y-8 justify-items-center">
            <Skeleton className="rounded-xl shadow-xl p-8 w-full max-w-[70vw] h-60" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[70vw]">
              <Skeleton className="rounded-xl shadow-xl p-8 w-full max-w-[70vw] h-60" />
              <Skeleton className="rounded-xl shadow-xl p-8 w-full max-w-[70vw] h-60" />
            </div>
          </div>
        ) : (
          <PredictionsCV prediction={predictions} />
        )}
      </div>
    </div>
  );
}
