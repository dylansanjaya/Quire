import Result from "@/components/job/Result";
import SearchBox from "@/components/job/Search";

export default function JobSearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const jobId = searchParams.job_id || 0;
  return (
    <div className="mt-28 p-8 space-y-4">
      <SearchBox />
      <Result searchParams={jobId}/>
    </div>
  );
}

