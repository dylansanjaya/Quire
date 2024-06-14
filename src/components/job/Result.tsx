import Link from "next/link";
import { Button } from "../ui/button";

const jobs = [
  {
    id: 1,
    image_url: "image1.jpg",
    title: "Software Engineer",
    poster: "Google LLC",
    source: "Indeed",
    posttime: "3 Hours ago",
    isLiked: false,
    isSaved: true,
  },
  {
    id: 2,
    image_url: "image2.jpg",
    title: "Graphic Designer",
    poster: "Freelance",
    source: "Dribbble",
    posttime: "4 Hours ago",
    isLiked: true,
    isSaved: false,
  },
  {
    id: 3,
    image_url: "image3.jpg",
    title: "Data Scientist",
    poster: "Facebook Inc.",
    source: "LinkedIn",
    posttime: "2 Days ago",
    isLiked: false,
    isSaved: true,
  },
  {
    id: 4,
    image_url: "image4.jpg",
    title: "Product Manager",
    poster: "Amazon",
    source: "Glassdoor",
    posttime: "1 Week ago",
    isLiked: true,
    isSaved: false,
  },
  {
    id: 5,
    image_url: "image5.jpg",
    title: "UI/UX Designer",
    poster: "Microsoft",
    source: "Behance",
    posttime: "5 Days ago",
    isLiked: false,
    isSaved: true,
  },
];

const jobDetails = [
  {
    id: 1,
    image_url: "image1.jpg",
    title: "Software Engineer",
    poster: "Google LLC",
    location: "Mountain View, CA",
    short_detail: "Develop scalable web applications.",
    type: "Full-time",
    posttime: "3 Hours ago",
    link: "https://google.com/careers",
    description:
      "As a Software Engineer at Google, you will be working on cutting-edge technologies and developing scalable web applications to enhance user experience.",
  },
  {
    id: 2,
    image_url: "image2.jpg",
    title: "Graphic Designer",
    poster: "Freelance",
    location: "Remote",
    short_detail: "Create stunning graphics for various clients.",
    type: "Contract",
    posttime: "4 Hours ago",
    link: "https://dribbble.com/freelance-jobs",
    description:
      "We are looking for a creative Graphic Designer to work on multiple projects for our clients. You should have a strong portfolio and experience in various design tools.",
  },
  {
    id: 3,
    image_url: "image3.jpg",
    title: "Data Scientist",
    poster: "Facebook Inc.",
    location: "Menlo Park, CA",
    short_detail: "Analyze large datasets to derive insights.",
    type: "Full-time",
    posttime: "2 Days ago",
    link: "https://facebook.com/careers",
    description:
      "Join our Data Science team to analyze and interpret complex data sets, derive actionable insights, and contribute to our data-driven culture.",
  },
  {
    id: 4,
    image_url: "image4.jpg",
    title: "Product Manager",
    poster: "Amazon",
    location: "Seattle, WA",
    short_detail: "Lead the development of new products.",
    type: "Full-time",
    posttime: "1 Week ago",
    link: "https://amazon.jobs",
    description:
      "As a Product Manager at Amazon, you will be responsible for guiding the development of new products from concept to launch. You will work with cross-functional teams to ensure success.",
  },
  {
    id: 5,
    image_url: "image5.jpg",
    title: "UI/UX Designer",
    poster: "Microsoft",
    location: "Redmond, WA",
    short_detail: "Design intuitive user interfaces.",
    type: "Full-time",
    posttime: "5 Days ago",
    link: "https://careers.microsoft.com",
    description:
      "We are seeking a talented UI/UX Designer to create user-friendly interfaces for our software products. You will collaborate with developers and product managers to bring designs to life.",
  },
];

function JobCard({
  jobID,
  image_url,
  title,
  poster,
  posttime,
  source,
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
      className={`bg-background shadow-xl rounded-xl w-96 my-4 hover:bg-gray-200 ${
        isClicked ? "bg-gray-200" : "bg-background"
      }`}
    >
      <div className="flex p-4 justify-between">
        <div className="Content space-y-2">
          <div className="flex space-x-2">
            <div>
              <div className="bg-background shadow-xl rounded-xl w-20 aspect-square">
                {image_url}
              </div>
            </div>
            <div>
              <div>{title}</div>
              <div>{poster}</div>
            </div>
          </div>
          <div>
            {source} - {posttime}
          </div>
        </div>
        {/* <div className="flex space-x-2">
          <div>{isLiked ? "Liked" : "notLiked"}</div>
          <div>{isSaved ? "Saved" : "notSaved"}</div>
        </div> */}
      </div>
    </div>
  );
}

function JobCards({ jobClickedID }: any) {
  const totalJobs = jobs.length;
  return (
    <div className="space-y-4">
      <div>{totalJobs} Lowongan</div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link href={`/jobs/?job_id=${job.id}`} key={job.id} scroll={false}>
            <JobCard
              image_url={job.image_url}
              title={job.title}
              poster={job.poster}
              source={job.source}
              posttime={job.posttime}
              isLiked={job.isLiked}
              isSaved={job.isSaved}
              jobID={job.id}
              jobClickedID={jobClickedID}
            />
          </Link>
        ))}
      </div>
      <div className="bg=background rounded-xl shadow-xl w-96">
        <div className="flex p-4 justify-between">
          <div>Prev</div>
          <div>Pages</div>
          <div>Next</div>
        </div>
      </div>
    </div>
  );
}

function JobDetail({ id }: any) {
  const job = jobDetails.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="bg=background rounded-xl shadow-xl w-full">
        <div className="p-8 space-y-4">
          <div>Pilih lowongan kerja</div>
          <div>Detail lowongan akan ditampilkan disini</div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg=background rounded-xl shadow-xl w-full">
      <div className="grid p-8 space-y-4">
        <div className="justify-self-end">test</div>
        <div className="Image">
          <div className="bg-background shadow-xl rounded-xl w-32 aspect-square">
            {job.image_url}
          </div>
        </div>
        <div>
          <div>{job.title}</div>
          <div>{job.poster}</div>
        </div>
        <div>
          <div>{job.location}</div>
          <div>{job.short_detail}</div>
          <div>{job.type}</div>
        </div>
        <div>{job.posttime}</div>
        <div className="space-x-2">
          <Link href={job.link}>
            <Button>Buka</Button>
          </Link>
          <Button>Sesuaikan CV</Button>
        </div>
        <div>{job.description}</div>
      </div>
    </div>
  );
}

export default function Result({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex space-x-4">
      <JobCards jobClickedID={searchParams} />
      <JobDetail id={searchParams} />
    </div>
  );
}
