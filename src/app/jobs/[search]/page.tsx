import Result from "@/components/job/Result";
import { Suspense } from 'react'


export default function JobSearchPage({ params, searchParams }: any) {
  const job = searchParams.job || "";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Result params={params.search} searchParams={job} />
    </Suspense>
  );
}