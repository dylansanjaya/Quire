import Image from "next/image";
import Link from "next/link";

function JobCards({ lowongan }: { lowongan: any[] }) {
  return (
    <div className="lowongan">
      <div className="lowongan-count">
        <p className="text-sm">{lowongan.length} Lowongan</p>
      </div>
      <div className="lowongan-cards grid">
        {lowongan.map((lowongan: any) => (
          <Link
            href={{
              pathname: `/jobs`,
              query: { jobSlug: `${lowongan.url}` },
            }}
            key={lowongan.id}
            scroll={false}
          >
            <div
              className={`bg-background shadow-xl rounded-xl w-96 my-4 hover:border hover:border-[#4945C4]`}
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
  );
}

export default function SearchResults({ jobs }: any) {
  const lowongan = jobs?.lowongan;

  // Kalo bukan array
  if (!Array.isArray(lowongan)) {
    return <div>No jobs found.</div>;
  }

  // Kalo gaada lowongan
  if (!lowongan) {
    return <div>No jobs found.</div>;
  }

  // Kalo array lowongan kosong
  if (lowongan.length === 0) {
    return <div>No jobs found.</div>;
  }

  return (
    <div className="flex bg-slate-400">
      <div className="flex w-full justify-center">
        <JobCards lowongan={lowongan} />
        <div className="hidden xl:block">
          Detail
        </div>
      </div>
    </div>
  );
}
