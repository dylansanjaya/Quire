import Searchbox2 from "@/components/skill-up/search/Search";
import CourseCards from "@/components/skill-up/Courses";
import WorkOnProgress from "@/components/ui/on-progress";

export default function SkillUp() {
  return (
    <div className="p-8 space-y-8 min-h-lvh">
      <WorkOnProgress/>
      <Searchbox2 />
      <div className="grid w-full h-96 bg-gray-400">
        <div className="justify-self-center self-center">Slideshow</div>
      </div>
      <div className="space-y-8">
      <CourseCards title={"Untuk anda"}/>
      <CourseCards title={"Populer"}/>
      </div>
    </div>
  );
}
