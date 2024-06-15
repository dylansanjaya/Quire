import Link from "next/link";
import { Button } from "../ui/button";
import { SmallButton } from "../ui/small_button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import CourseCards from "../skill-up/Courses";
import ChatBot from "./Chat";
import Image from "next/image";
import defaultImage from "P/assets/img/logo.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

const jobs = [
  {
    id: 1,
    image_url: "default",
    title: "Software Engineer",
    poster: "Google LLC",
    source: "Indeed",
    posttime: "3 Hours ago",
    isLiked: false,
    isSaved: true,
  },
  {
    id: 2,
    image_url: "default",
    title: "Graphic Designer",
    poster: "Freelance",
    source: "Dribbble",
    posttime: "4 Hours ago",
    isLiked: true,
    isSaved: false,
  },
  {
    id: 3,
    image_url: "default",
    title: "Data Scientist",
    poster: "Facebook Inc.",
    source: "LinkedIn",
    posttime: "2 Days ago",
    isLiked: false,
    isSaved: true,
  },
  {
    id: 4,
    image_url: "default",
    title: "Product Manager",
    poster: "Amazon",
    source: "Glassdoor",
    posttime: "1 Week ago",
    isLiked: true,
    isSaved: false,
  },
  {
    id: 5,
    image_url: "default",
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
    image_url: "default",
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
    image_url: "default",
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
    image_url: "default",
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
    image_url: "default",
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
    image_url: "default",
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
      className={`bg-background shadow-xl rounded-xl w-96 my-4 hover:border hover:border-[#4945C4] aspect-video ${
        isClicked ? "border border-[#4945C4]" : "bg-background"
      }`}
    >
      <div className="flex h-full p-4 justify-between">
        <div className="Content grid space-y-2">
          <div>
            <div className="bg-background shadow-xl rounded-xl w-20 aspect-square">
              <Image
                src={defaultImage}
                alt="img"
                className="w-40"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
          <div>
            <h5 className="font-semibold">{title}</h5>
            <p className="text-sm">{poster}</p>
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

function JobCards({ params, jobClickedID }: any) {
  const totalJobs = jobs.length;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm">{totalJobs} Lowongan</p>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link
            href={`/jobs/${params}?job_id=${job.id}`}
            key={job.id}
            scroll={false}
          >
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
      </div>
    </div>
  );
}

function CVStitch() {
  return (
    <div className="space-y-4">
      <div className="grid space-x-3">
        <div className="w-2/3 p-4 h-96 bg-gray-300 rounded-xl justify-self-center">
          <div className="grid h-full border border-1 rounded-xl p-4">
            <Input className="self-center" id="picture" type="file" />
          </div>
        </div>
      </div>
      <div className="grid">
        <Button className="w-96 justify-self-center" type="button">
          Cari
        </Button>
      </div>
    </div>
  );
}

function JobDetail({ id }: any) {
  const job = jobDetails.find((job) => job.id === Number(id));

  return (
    <div className="space-y-4">
      <div className="Image">
        <div className="bg-background shadow-xl rounded-xl w-32 aspect-square">
          <Image
            src={defaultImage}
            alt="img"
            className="w-40"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">{job.title}</h3>
        <p>{job.poster}</p>
      </div>
      <div>
        <p>{job.location}</p>
        <p>{job.short_detail}</p>
        <p>{job.type}</p>
      </div>
      <p className="text-sm">{job.posttime}</p>
      <div className="space-x-2">
        <Link href={job.link}>
          <Button>Buka</Button>
        </Link>
        <Button variant={"outline"}>Simpan</Button>
      </div>
      <div>
        <h4 className="font-semibold">Deskripsi</h4>
        <p>{job.description}</p>
      </div>
    </div>
  );
}

function JobDetails({ id }: any) {
  const job = jobDetails.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="bg-gray-200 rounded-xl shadow-xl w-full">
        <div className="flex p-8 items-start space-x-4">
          <div>
            <IoMdArrowRoundBack className="text-2xl" />
          </div>
          <div className=" space-y-4">
            <h4 className="text-2xl font-bold">Pilih lowongan kerja</h4>
            <p>Detail lowongan akan ditampilkan disini</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid shrink bg-background rounded-xl shadow-xl w-full">
      <div className="p-8 space-y-8">
        <Tabs defaultValue="detail" className="w-full space-y-8">
          <TabsList>
            <TabsTrigger value="detail">Detail</TabsTrigger>
            <TabsTrigger value="chat">Chat Bot</TabsTrigger>
            <TabsTrigger value="cv">CV Stitch</TabsTrigger>
          </TabsList>
          <TabsContent value="detail" className="space-y-4">
            <JobDetail id={id} />
          </TabsContent>
          <TabsContent value="chat" className="space-y-4">
            <ChatBot />
          </TabsContent>
          <TabsContent value="cv" className="space-y-4">
            <CVStitch />
          </TabsContent>
        </Tabs>
        <div className="p-8 shadow-xl rounded-xl border-2 space-y-8">
          <CourseCards title={"Course Skill Up relevan"} />
          <CourseCards title={"Rekomendasi Course"} />
        </div>
      </div>
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
