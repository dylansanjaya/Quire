import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import JobDetails from "./JobDetails";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function JobCards() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const params = useParams();
  const searchParams = useSearchParams();
  const slugQuery = searchParams.get("jobSlug");

  useEffect(() => {
    const getJobs = async () => {
      setIsFetching(true);
      setJobs([]);
      try {
        const res = await fetch(
          `https://quire-backend-6mcqyfdvaa-et.a.run.app/api/job`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ search: params.search }),
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setJobs(data.data.lowongan);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setJobs([]);
      } finally {
        setIsFetching(false);
      }
    };

    getJobs();
  }, [params.search]);

  const lowongan = jobs;

  if (isFetching || lowongan.length === 0) {
    return (
      <div className="flex w-[100vw] justify-center">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="lowongan-cards bg-gray-200 overflow-y-auto h-[35vh] lg:h-[70vh] px-4">
        {error}
      </div>
    );
  }

  return (
    <div className="lg:flex w-full justify-center gap-4">
      <div className="lowongan space-y-4">
        <div className="lowongan-cards bg-gray-200 overflow-y-auto h-[35vh] lg:h-[70vh] px-4">
          <div className="lowongan-count mt-4">
            <p className="text-sm">{lowongan.length} Lowongan</p>
          </div>
          {lowongan.map((lowongan: any) => (
            <Link
              href={{
                query: { jobSlug: `${lowongan.url}` },
              }}
              key={lowongan.id}
              scroll={false}
            >
              <div
                className={`bg-background shadow-xl rounded-xl w-full lg:w-96 my-4 hover:border hover:border-primary ${
                  lowongan.url === slugQuery ? `border border-primary` : ``
                }`}
              >
                <div className="flex h-full p-4 justify-between">
                  <div className="Content grid space-y-2">
                    <div>
                      <div className="relative bg-background shadow-xl rounded-xl w-20 aspect-square">
                        <Image
                          src={lowongan.image_url}
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
                      <h5 className="font-semibold">{lowongan.title}</h5>
                      <p className="text-sm">{lowongan.company}</p>
                    </div>

                    <p className="self-end text-sm">
                      {lowongan.source} - {lowongan.posttime}
                    </p>
                  </div>
                  {/* <div className="flex space-x-2">
      <div>{isLiked ? "Liked" : "notLiked"}</div>
      <div>{isSaved ? "Saved" : "notSaved"}</div>
      </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="pagination bg-background rounded-xl shadow-xl w-96">
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
      <div className="w-full">
        <JobDetails />
      </div>
    </div>
  );
}
