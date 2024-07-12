import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkOnProgress from "@/components/ui/on-progress";
import Link from "next/link";

export default function CVSearch() {
  return (
    <div className="space-y-4">
      <WorkOnProgress/>
      <h2 className="font-bold text-xl">Pencarian Scan CV</h2>
      <form className="grid gap-4">
        <div className="grid space-x-3">
          <div className="w-full p-4 h-96 bg-gray-300 rounded-xl justify-self-center">
            <div className="grid h-full border border-1 rounded-xl p-4">
              <Input className="self-center" id="picture" type="file" />
            </div>
          </div>
        </div>
        <Link href={`/jobs/predict/cv`} className="grid">
          <Button
            className="justify-self-center"
            // disabled={true}
            type="submit"
          >
            Cari
          </Button>
        </Link>
      </form>
    </div>
  );
}
