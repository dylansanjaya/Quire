'use client'


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function SearchBox() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="rounded-xl shadow-xl bg-white">
      <div className="p-8 py-12">
        <div className="Header">
          <Tabs defaultValue="normal" className="w-full">
            <div className="flex justify-between items-center">
              <Link href={"/jobs"}>Back</Link>
              <TabsList>
                <TabsTrigger value="normal">Nromal Search</TabsTrigger>
                <TabsTrigger value="story">Job Story Tell</TabsTrigger>
                <TabsTrigger value="cv">CV Scan</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="normal">
              <h2>Normal Search</h2>
              <div className="flex space-x-3">
                <Input />
                <Input />
                <Button variant={"outline"}>Filter</Button>
                <Button type="button" onClick={() => router.push(`/jobs/Frontend`)}>
                  Cari
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="story">
              <h2>Job Story Tell</h2>
              <div className="flex space-x-3">
                <Input />
                <Button type="button" onClick={() => router.push(`/jobs/Frontend`)}>
                  Cari
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="cv">
              <h2>CV Scan</h2>
              <div className="flex space-x-3">
                <div className="w-full p-4 h-96 bg-gray-300 rounded-xl">
                  <div className="grid h-full border border-1 rounded-xl p-4">
                    <Input className="self-center" id="picture" type="file" />
                  </div>
                </div>
                <Button type="button" onClick={() => router.push(`/jobs/Frontend`)}>
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
