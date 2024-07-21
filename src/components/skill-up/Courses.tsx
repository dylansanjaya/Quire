import Link from "next/link";
import { SmallButton } from "../ui/small_button";
import Image from "next/image";
import defImage from "P/assets/img/111.jpg"


function CourseCard({ image_url, title, source, review_score, link_url }: any) {
  return (
    <div className="bg-background rounded-xl shadow-xl w-96 aspect-[4/3] snap-center">
      <div className="grid h-full grid-rows-5">
        <div className="relative row-span-3 bg-gray-200 rounded-t-xl">
          <Image
                src={image_url}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="aspect-video rounded-t-xl"
                loading="lazy"
                draggable={false}
              />
        </div>
        <div className="row-span-2 grid p-2">
          <div>
            <div className="flex items-center space-x-2">
              <h5 className="font-semibold">{title}</h5>
            </div>
            <p className="text-sm">{source}</p>
            {/* <p className="text-sm">{review_score}</p> */}
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
    image_url: defImage,
    title: "Manual Brewing Coffee and Latte Art I",
    source: "Skillhub",
    review_score: "5/5",
    link_url: "https://skillhub.kemnaker.go.id/pelatihan/manual-brewing-coffee-and-latte-art-e46d7a3f-16eb-47af-89d8-94c35a87f98e",
  },
  {
    id: 2,
    image_url: defImage,
    title: "Manual Brewing Coffee and Latte Art II",
    source: "Skillhub",
    review_score: "5/5",
    link_url: "https://skillhub.kemnaker.go.id/pelatihan/manual-brewing-coffee-and-latte-art-e46d7a3f-16eb-47af-89d8-94c35a87f98e",
  },
  {
    id: 3,
    image_url: defImage,
    title: "Manual Brewing Coffee and Latte Art III",
    source: "Skillhub",
    review_score: "5/5",
    link_url: "https://skillhub.kemnaker.go.id/pelatihan/manual-brewing-coffee-and-latte-art-e46d7a3f-16eb-47af-89d8-94c35a87f98e",
  },
];

export default function CourseCards({ title }: any) {
  return (
    <div className="space-y-4 ">
      <h4 className="font-semibold">{title}</h4>
        <div className="flex space-x-4 w-full snap-mandatory snap-x bg-slate-700">
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
