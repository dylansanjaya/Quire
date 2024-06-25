import Result from "@/components/job/Result";

export default function JobSearchPage({ params, searchParams }: any) {
  const jobId = searchParams.job_id || 0;

  return (
    <div>
      <Result params={params.search} searchParams={jobId} />
    </div>
  );
}