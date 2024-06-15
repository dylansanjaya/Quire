'use client'

import React, { useEffect, useState } from "react";
import Result from "@/components/job/Result";

export default function JobSearchPage({ params, searchParams }: any) {
  const jobId = searchParams.job_id || 0;
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResult(true);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div>
      {showResult ? <Result params={params.search} searchParams={jobId} /> : <p>Loading...</p>}
    </div>
  );
}