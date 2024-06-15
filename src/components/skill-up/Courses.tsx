import Link from "next/link";
import { SmallButton } from "../ui/small_button";

function CourseCard({ image_url, title, source, review_score, link_url }: any) {
  return (
    <div className="bg-background rounded-xl shadow-xl w-96 aspect-[4/3]">
      <div className="grid h-full grid-rows-5">
        <div className="row-span-3 bg-gray-200 rounded-t-xl"></div>
        <div className="row-span-2 grid p-2">
          <div>
            <div className="flex items-center space-x-2">
              <h5 className="font-semibold">{title}</h5>
              <p className="text-sm">{" - "}{source}</p>
            </div>
            <p className="text-sm">{review_score}</p>
          </div>
          <div className="self-end">
            <Link href={link_url}>
              <SmallButton className="w-full rounded-xl">Buka</SmallButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 1,
    image_url: "bruh",
    title: "title",
    source: "source",
    review_score: "5/5",
    link_url: "/skill-up",
  },
  {
    id: 2,
    image_url: "bruh",
    title: "title",
    source: "source",
    review_score: "5/5",
    link_url: "/skill-up",
  },
  {
    id: 3,
    image_url: "bruh",
    title: "title",
    source: "source",
    review_score: "5/5",
    link_url: "/skill-up",
  },
];

export default function CourseCards({ title }: any) {
  return (
    <div className="space-y-4 ">
      <h4 className="font-semibold">{title}</h4>
      <div className="scroll">
        <div className="flex space-x-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              image_url={course.image_url}
              title={course.title}
              source={course.source}
              review_score={course.review_score}
              link_url={course.link_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
