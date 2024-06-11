import Searchbox2 from "@/components/skill-up/Search";
import CourseCards from "@/components/skill-up/Courses";

export default function SkillUp() {
  return (
    <div className="mt-28 p-8 space-y-4 min-h-lvh">
      <Searchbox2 />
      <div className="grid w-full h-96 bg-gray-400">
        <div className="justify-self-center self-center">Slideshow</div>
      </div>
      <CourseCards />
      <CourseCards />
    </div>
  );
}
