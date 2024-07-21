import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import SearchForm from "./search-form";

export default function SearchBox2() {
  return (
    <div className="rounded-xl shadow-xl bg-white">
      <div className="p-8">
        <div className="Header space-y-4">
          <h2 className="font-bold text-xl">Cari Skill-Up Course</h2>
            <SearchForm />
        </div>
      </div>
    </div>
  );
}
