import JobCards from "./JobCards";
import JobDetails from "./JobDetails";

export default function SearchResults({ jobs }: any) {
  const lowongan = jobs?.lowongan;

  // Kalo bukan array
  if (!Array.isArray(lowongan)) {
    return <div></div>;
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
    <div className="flex mt-12">
      <div className="lg:flex w-full justify-center gap-4">
        <JobCards lowongan={lowongan} />
        <div className="w-full">
          <JobDetails />
        </div>
      </div>
    </div>
  );
}
