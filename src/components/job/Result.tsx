import Link from "next/link";
import { Button } from "../ui/button";
import { SmallButton } from "../ui/small_button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import CourseCards from "../skill-up/Courses";
import ChatBot from "./Chat";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

async function getJobs(params: any) {
  const res = await fetch('http://localhost:8080/api/job',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ search: params }),
    cache: 'no-store',
  })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const jobDetails = [
  {
    id: 1,
    image_url:
      "https://www.grand-indonesia.com/wp-content/uploads/2023/07/KOPI-KENANGAN_LOGO-2020.png",
    title: "Barista",
    poster: "Kopi Kenangan",
    location: "Jakarta, Indonesia",
    short_detail: "Menyajikan kopi berkualitas tinggi untuk pelanggan.",
    type: "Penuh Waktu",
    posttime: "3 Jam yang lalu",
    link: "https://kopikenangan.com/karir",
    description:
      "Sebagai Barista di Kopi Kenangan, Anda akan bertanggung jawab untuk menyajikan kopi berkualitas tinggi dan memberikan layanan terbaik kepada pelanggan. Kami mencari individu yang antusias dan berdedikasi.",
  },
  {
    id: 2,
    image_url: "https://logowik.com/content/uploads/images/280_starbucks.jpg",
    title: "Barista",
    poster: "Starbucks Indonesia",
    location: "Bandung, Indonesia",
    short_detail: "Membuat dan menyajikan minuman kopi dengan standar tinggi.",
    type: "Kontrak",
    posttime: "4 Jam yang lalu",
    link: "https://starbucks.co.id/karir",
    description:
      "Kami mencari Barista yang berpengalaman untuk bergabung dengan tim kami di Starbucks Indonesia. Anda akan bertanggung jawab untuk membuat dan menyajikan minuman kopi dengan standar tinggi serta memberikan layanan pelanggan yang luar biasa.",
  },
  {
    id: 3,
    image_url:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_809,h_500/https://www.theematicmall.com/wp-content/uploads/2016/05/logo-janji-jiwa.jpg",
    title: "Barista",
    poster: "Janji Jiwa",
    location: "Surabaya, Indonesia",
    short_detail:
      "Menyediakan kopi dan minuman lainnya dengan cepat dan ramah.",
    type: "Penuh Waktu",
    posttime: "2 Hari yang lalu",
    link: "https://janjijiwa.com/karir",
    description:
      "Bergabunglah dengan tim Janji Jiwa sebagai Barista. Tanggung jawab Anda termasuk menyajikan kopi dan minuman lainnya dengan cepat dan ramah. Kami mencari individu yang memiliki semangat dan antusiasme dalam pelayanan pelanggan.",
  },
  {
    id: 4,
    image_url: "https://bigmall.co.id/wp-content/uploads/2023/05/excelso.jpg",
    title: "Barista",
    poster: "Excelso",
    location: "Medan, Indonesia",
    short_detail: "Mengoperasikan mesin kopi dan melayani pelanggan.",
    type: "Penuh Waktu",
    posttime: "1 Minggu yang lalu",
    link: "https://excelso-coffee.com/karir",
    description:
      "Excelso sedang mencari Barista yang berpengalaman untuk bergabung dengan tim kami. Anda akan mengoperasikan mesin kopi dan melayani pelanggan dengan profesionalisme dan keahlian tinggi.",
  },
  {
    id: 5,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhKUDxpDRyUKvYqHN58KB1A6WYZWnwUdisQ&s",
    title: "Barista",
    poster: "Fore Coffee",
    location: "Yogyakarta, Indonesia",
    short_detail: "Membuat dan menyajikan berbagai macam minuman kopi.",
    type: "Penuh Waktu",
    posttime: "5 Hari yang lalu",
    link: "https://fore.coffee/karir",
    description:
      "Sebagai Barista di Fore Coffee, Anda akan membuat dan menyajikan berbagai macam minuman kopi. Kami mencari seseorang yang kreatif dan memiliki hasrat terhadap kopi untuk bergabung dengan tim kami.",
  },
];

function JobCard({
  jobID,
  image_url,
  title,
  company,
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
  const data = await getJobs(params)

  const jobs = data.data.lowongan

  const totalJobs = jobs.length;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm">{totalJobs} Lowongan</p>
      </div>
      <div className="space-y-4">
        {jobs.map((job: any) => (
          <Link
            href={`/jobs/${params}?job_id=${job.id}`}
            key={job.id}
            scroll={false}
          >
            <JobCard
              image_url={job.image_url}
              title={job.title}
              company={job.company}
              source={"semarloker"}
              posttime={job.posttime}
              // isLiked={job.isLiked}
              // isSaved={job.isSaved}
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
            <div className="space-y-4">
              <div className="relative bg-background shadow-xl rounded-xl w-40 aspect-square">
              <Image
                src={job.image_url}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="aspect-square rounded-xl"
                loading="lazy"
                draggable={false}
              />
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
          {/* <CourseCards title={"Rekomendasi Course"} /> */}
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
