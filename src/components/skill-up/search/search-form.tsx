"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  function handleSubmit(event: any) {
    event.preventDefault();
    router.push(`/skill-up/search/?=${inputValue}`);
  }

  return (
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
          <Button type="submit" disabled={!inputValue ? true : false}>
            Cari
          </Button>
        </div>
      </div>
    </form>
  );
}
