"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SearchResults from "../components/results/Results";

export default function NormalSearch() {
  const [inputValue, setInputValue] = useState("");
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  async function getJobs(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsFetching(true);
    setJobs([]);
    router.push("/jobs");

    try {
      const res = await fetch(
        `https://quire-backend-6mcqyfdvaa-uc.a.run.app/api/job`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search: inputValue }),
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setJobs(data.data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setJobs([]);
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Pencarian Normal</h2>
      <form onSubmit={getJobs}>
        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Masukan kata kunci"
          />
          <div className="flex grid-cols-2 gap-4 justify-center">
            <Button variant={"outline"}>Filter</Button>
            {
              <Button
                type="submit"
                disabled={
                  !inputValue ? true : false || isFetching ? true : false
                }
              >
                {isFetching ? (
                  <div className="flex space-x-2 items-center">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    <p>Mecari...</p>
                  </div>
                ) : (
                  `Cari`
                )}
              </Button>
            }
          </div>
        </div>
      </form>
      {error && <div>Error Fetching: {error}</div>}
      <div >
      <SearchResults jobs={jobs} />
      </div>
    </div>
  );
}
