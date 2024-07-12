"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WorkOnProgress from "@/components/ui/on-progress";
import Link from "next/link";
import { useState } from "react";

export default function StorySearch() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="space-y-4">
      <WorkOnProgress />
      <h2 className="font-bold text-xl">Pencarian Story Tell</h2>
      <div className="md:flex gap-4 space-y-4 md:space-y-0">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ceritakan pekerjaan impian mu"
        />
        <div className="flex grid-cols-2 gap-4 justify-center">
          <Button variant={"outline"}>Filter</Button>
          <Link href={`/jobs/predict?prompt=${inputValue}`}>
            <Button type="button">Cari</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
