"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function NormalSearch() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  function replaceSlashesWithHyphens(str: string) {
    return str.replace(/\//g, "-");
  }

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    router.push(`/jobs/${replaceSlashesWithHyphens(inputValue)}`); // Update this path as needed
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Pencarian Normal</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <Input
            type="text"
            value={inputValue}
            minLength={5}
            maxLength={50}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Masukan kata kunci"
          />
          <div className="flex grid-cols-2 gap-4 justify-center">
            {/* <Button variant={"outline"} disabled={true}>Filter</Button> */}
            <Button type="submit"   >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
