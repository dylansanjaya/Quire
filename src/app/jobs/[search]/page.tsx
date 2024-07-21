import SearchResults from "@/components/job/components/results/Results";
import { Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function JobSearchPage() {
  return (
    <Suspense
      fallback={<AiOutlineLoading3Quarters className="animate-spin text-4xl" />}
    >
      <SearchResults />
    </Suspense>
  );
}
