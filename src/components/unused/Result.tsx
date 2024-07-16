import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import JobDetails from "./JobDetails";

async function getJobs(params: any) {
  const url = `https://quire-backend-6mcqyfdvaa-uc.a.run.app/api/job`;
  const res = await fetch(url, {
    method: "POST",
  headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ search: params }),
    cache: "no-store",
  });

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return <div>Error Fetching!</div>;
  }

  return res.json();
}

function JobCard({
  jobID,
  image_url,
  title,
  company,
  posttime,
  source,
  url,
  isLiked,
  isSaved,
  jobClickedID,
}: any) {
  let isClicked = false;
  if (jobID == jobClickedID) {
    isClicked = true;
  } else {
    isClicked = false;
  }
  return (
    <div
      className={`bg-background shadow-xl rounded-xl w-96 my-4 hover:border hover:border-[#4945C4] ${
        isClicked ? "border border-[#4945C4]" : "bg-background"
      }`}
    >
      <div className="flex h-full p-4 justify-between">
        <div className="Content grid space-y-2">
          <div>
            <div className="relative bg-background shadow-xl rounded-xl w-20 aspect-square">
              <Image
                src={image_url}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="aspect-square rounded-xl"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
          <div>
            <h5 className="font-semibold">{title}</h5>
            <p className="text-sm">{company}</p>
          </div>

          <p className="self-end text-sm">
            {source} - {posttime}
          </p>
        </div>
        {/* <div className="flex space-x-2">
          <div>{isLiked ? "Liked" : "notLiked"}</div>
          <div>{isSaved ? "Saved" : "notSaved"}</div>
        </div> */}
      </div>
    </div>
  );
}

async function JobCards({ params, jobClickedID }: any) {
  const data = await getJobs(params);

  const jobs = data.data.lowongan;

  const totalJobs = jobs.length;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm">{totalJobs} Lowongan</p>
      </div>
      <div className="space-y-4">
        {jobs.map((job: any) => (
          <Link
            href={{
              pathname: `/jobs/${params}`,
              query: { job: `${job.url}` },
            }}
            key={job.id}
            scroll={false}
          >
            <JobCard
              image_url={job.image_url}
              title={job.title}
              company={job.company}
              source={job.source}
              posttime={job.posttime}
              // isLiked={job.isLiked}
              // isSaved={job.isSaved}
              jobID={job.url}
              jobClickedID={jobClickedID}
              url={job.url}
            />
          </Link>
        ))}
      </div>
      {/* <div className="bg=background rounded-xl shadow-xl w-96">
        <div className="flex p-4 justify-between text-[#4945C4] items-center text-xl">
          <IoChevronBack />
          <div className="space-x-2">
            <SmallButton>1</SmallButton>
            <SmallButton variant="ghost">2</SmallButton>
            <SmallButton variant="ghost">3</SmallButton>
            <SmallButton variant="ghost">4</SmallButton>
            <SmallButton variant="ghost">5</SmallButton>
          </div>
          <IoChevronForward />
        </div>
      </div> */}
    </div>
  );
}

export default function Result({ params, searchParams }: any) {
  return (
    <div className="flex space-x-4">
      <JobCards params={params} jobClickedID={searchParams} />
      <JobDetails id={searchParams} />
    </div>
  );
}
