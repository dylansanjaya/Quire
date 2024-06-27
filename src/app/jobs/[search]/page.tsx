import Result from "@/components/job/Result";

export default function JobSearchPage({ params, searchParams }: any) {
  const job = searchParams.job || "";

  return (
    <div>
      <Result params={params.search} searchParams={job} />
    </div>
  );
}