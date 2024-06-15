import Link from "next/link";
import { Button } from "../ui/button";

function CourseCard({
  image_url,
  title,
  source,
  review_score,
  link_url,
}: any) {
  return (
    <div className="bg-background rounded-xl shadow-xl w-96 aspect-[4/3]">
      <div className="grid bg-gray-400 rounded-xl aspect-[16/7]">
        <div className=" justify-self-center self-center">{image_url}</div>
      </div>
      <div>
        <div>
          {title} - {source}
        </div>
        <div>{review_score}</div>
        <div>
          <Link href={link_url}>
            <Button className="w-full">Buka</Button>
          </Link>
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

export default function CourseCards({title}: any) {
  return (
      <div className="space-y-4 ">
        <div>{title}</div>
        <div className="flex space-x-4 scroll-m-8">
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
  );
}
