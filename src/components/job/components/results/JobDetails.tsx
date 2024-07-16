"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import ChatBot from "../../Chat";
import CVStitch from "../../CVStitch";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posttime: string;
  image_url: string;
  url: string;
  description: string;
}

interface JobData {
  data: Job;
}

async function getJobDetails(
  slugQuery: string,
  setLoading: (loading: boolean) => void
): Promise<JobData | { error: string }> {
  function removePartFromUrl(url: string): string {
    const partToRemove1 = "https://www.lokersemar.id/lowongan/";
    const partToRemove2 = "https://lokeradmin.net/lowongan/";
    const partToRemove3 = "https://lokerakuntan.net/lowongan/";
    url = url.replace(partToRemove1, "");
    url = url.replace(partToRemove2, "");
    url = url.replace(partToRemove3, "");
    return url;
  }

  function extractDomain(url: string): string | null {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const slug = removePartFromUrl(slugQuery);
  const source = extractDomain(slugQuery);

  setLoading(true);

  try {
    const res = await fetch(
      "https://quire-backend-6mcqyfdvaa-et.a.run.app/api/job/detail",
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
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    return { error: "Error fetching job details" };
  } finally {
    setLoading(false);
  }
}

export default function JobDetails() {
  const searchParams = useSearchParams();
  const slugQuery = searchParams.get("jobSlug");
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slugQuery) {
      getJobDetails(slugQuery, setLoading)
        .then((data) => {
          if ("error" in data) {
            setError(data.error);
          } else {
            setJob(data.data);
          }
        })
        .catch((err) => {
          setError("Error fetching job details");
        });
    } else {
      setLoading(false);
    }
  }, [slugQuery]);

  if (loading) {
    return (
      <Skeleton className="flex p-4 bg-gray-200 rounded-xl shadow-xl w-full h-[70vh] justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
      </Skeleton>
    );
  }

  if (error) {
    return (
      <div className="flex bg-gray-200 rounded-xl shadow-xl w-full h-[70vh]">
        <div className="flex p-8 items-start space-x-4">Error: {error}</div>
      </div>
    );
  }
  
  if (!job || !slugQuery || !(job.company)) {
    return (
      <div className="flex bg-gray-200 rounded-xl shadow-xl w-full h-[70vh]">
        <div className="flex p-8 items-start space-x-4">
          <div>
            <IoMdArrowRoundBack className="text-2xl" />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Pilih lowongan kerja</h4>
            <p>Detail lowongan akan ditampilkan disini</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid shrink bg-background rounded-xl shadow-xl w-full overflow-y-auto h-[70vh]">
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
                <p>{job.type}</p>
              </div>
              <p className="text-sm">{job.posttime}</p>
              <div className="space-y-4 space-x-0 sm:space-x-4 sm:space-y-0">
                <Button>
                  <Link href={job.url} target="_blank">
                    Buka
                  </Link>
                </Button>
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
      </div>
    </div>
  );
}
