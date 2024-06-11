import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox2() {
  return (
    <div className="rounded-xl shadow-xl bg-white">
      <div className="p-8 py-12">
        <div className="Header">
          <div className="flex space-x-3">
            <Input />
            <Button>Filter</Button>
            <Button>Cari</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
