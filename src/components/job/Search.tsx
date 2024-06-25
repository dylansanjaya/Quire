"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Predictions from "./Predict";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="rounded-xl shadow-xl bg-white">
      <div className="p-8 py-12">
        <div className="Header">
          <Tabs defaultValue="normal" className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <Link
                href={"/jobs"}
                className="flex items-center space-x-2 text-[#4945C4]"
              >
                <IoChevronBack />
                <div>Kembali</div>
              </Link>
              <TabsList>
                <TabsTrigger value="normal">Normal</TabsTrigger>
                <TabsTrigger value="story">Story Tell</TabsTrigger>
                <TabsTrigger value="cv">CV Scan</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="normal" className="space-y-4">
              <h2 className="font-bold text-xl">Pencarian Normal</h2>
              <div className="flex space-x-3">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Masukan kata kunci"
                />
                <Button variant={"outline"}>Filter</Button>
                <Link href={`/jobs/${inputValue}`}>
                <Button>
                  Cari
                </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="story" className="space-y-4">
              <h2 className="font-bold text-xl">Pencarian Story Tell</h2>
              <div className="flex space-x-3">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ceritakan pekerjaan impian mu"
                />
                <Link href={`/jobs/predict?prompt=${inputValue}`}>
                  <Button
                    type="button"
                  >
                    Cari
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="cv" className="space-y-4">
              <h2 className="font-bold text-xl">Pencarian Scan CV</h2>
              <div className="grid space-x-3">
                <div className="w-2/3 p-4 h-96 bg-gray-300 rounded-xl justify-self-center">
                  <div className="grid h-full border border-1 rounded-xl p-4">
                    <Input className="self-center" id="picture" type="file" />
                  </div>
                </div>
              </div>
              <div className="grid">
                <Button
                  className="justify-self-center"
                  disabled={true}
                  type="button"
                >
                  Cari
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
