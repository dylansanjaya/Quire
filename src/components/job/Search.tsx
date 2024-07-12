import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import NormalSearch from "./search/Normal";
import StorySearch from "./search/Story";
import CVSearch from "./search/CV";

export default function SearchBox() {
  return (
    <>
      <div className="bg-background p-8 shadow-xl rounded-xl">
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
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="cv">CV</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="normal">
              <NormalSearch />
            </TabsContent>
            <TabsContent value="story">
              <StorySearch />
            </TabsContent>
            <TabsContent value="cv">
              <CVSearch />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
