import { Button } from "../ui/button";
import { Input } from "../ui/input";
import WorkOnProgress from "../ui/on-progress";

export default function CVStitch() {
  return (
    <div className="space-y-4">
      <WorkOnProgress/>
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