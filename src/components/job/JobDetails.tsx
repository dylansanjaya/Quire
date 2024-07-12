import Link from "next/link";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCards from "../skill-up/Courses";
import ChatBot from "./Chat";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import CVStitch from "./CVStitch";

async function getJobDetails(params: any) {
  function removePartFromUrl(url: any) {
    const partToRemove1 = "https://www.lokersemar.id/lowongan/";
    const partToRemove2 = "https://lokeradmin.net/lowongan/";
    const partToRemove3 = "https://lokerakuntan.net/lowongan/";
    url = url.replace(partToRemove1, "");
    url = url.replace(partToRemove2, "");
    url = url.replace(partToRemove3, "");
    return url;
  }

  function extractDomain(url: string) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const slug = removePartFromUrl(params);
  const source = extractDomain(params);

  const res = await fetch(
    "https://quire-backend-6mcqyfdvaa-uc.a.run.app/api/job/detail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobSlug: slug,
        source: source,
      }),

      cache: "no-store",
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return <div>Error Fetching!</div>;
  }

  return res.json();
}

export default async function JobDetails({ id }: any) {
  if (id == "") {
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
  const data = await getJobDetails(id);
  const job = data.data;
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
                <p>{job.company}</p>
              </div>
              <div>
                <p>{job.location}</p>
                {/* <p>{job.short_detail}</p> */}
                <p>{job.type}</p>
              </div>
              <p className="text-sm">{job.posttime}</p>
              <div className="space-x-2">
                <Link href={job.url} target="_blank">
                  <Button>Buka</Button>
                </Link>
                <Button variant={"outline"}>Simpan</Button>
              </div>
              <div>
                <h4 className="font-semibold">Deskripsi</h4>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
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
        {/* <div className="p-8 shadow-xl rounded-xl space-y-8">
          <CourseCards title={"Course Skill Up relevan"} />
        </div> */}
      </div>
    </div>
  );
}
