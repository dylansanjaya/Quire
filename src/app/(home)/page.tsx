import Image from "next/image";
import JobshareIcon from "/public/assets/icon/job-share.svg";
import AiIcon from "/public/assets/icon/ai.svg";
import SkillIcon from "/public/assets/icon/skill.svg";
import { ComponentType, FunctionComponent } from "react";

export default function Home() {
  interface serviceProps {
    Icon: ComponentType;
    title: string;
    description: string;
  }

  function Masthead() {
    return (
      <div className="w-full h-screen flex text-white relative">
        <Image
          src={"/assets/img/masthead.png"}
          fill
          alt="masthead"
          className="w-full h-auto absolute -z-10"
        />
        <div className=" flex w-full h-fit flex-col self-center px-[10%] pt-16">
          <span className="text-8xl font-bold">Quire</span>
          <span className="my-5 max-w-[40%] font-light text-lg">
            Menjembatani dirimu dengan berbagai platform penyedia kerja serta
            mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan
            dirimu
          </span>
          <button className="bg-primary w-fit px-6 py-4 rounded-md font-medium text-xl">
            Cari Pekerjaan Incaranmu
          </button>
        </div>
      </div>
    );
  }

  function AboutSection() {
    return (
      <div className="flex flex-col items-center py-20 h-[600px]">
        <span className="font-bold text-4xl text-primary mb-12">Tentang</span>
        <div className="flex w-fit h-fit rounded-md outline outline-2 outline-primary mx-[10%] p-[2%] justify-around">
          <div className="flex relative w-[20%] h-auto">
            <Image src={"/assets/icon/logo.svg"} alt="logo" fill />
          </div>
          <div className="flex flex-col gap-2 w-[80%] md:text-2xl text-base">
            <span className="font-bold ">Apa itu Quire ?</span>
            <span>
              Quire adalah aplikasi penghubung, yang akan menjembatani job
              seeker atau pencari kerja dengan berbagai platform dan situs yang
              menawarkan lowongan pekerjaan. Selain itu, Quire juga membantu
              para pencari kerja untuk mampu memahami tren dan requirement
              pekerjaan. Serta memberikan solusi untuk memenuhi kebutuhan
              tersebut.
            </span>
          </div>
        </div>
      </div>
    );
  }

  function ServiceSection() {
    const serviceList = [
      {
        icon: JobshareIcon,
        title: "Koleksi Loker",
        description: "description",
      },
      {
        icon: AiIcon,
        title: "Dukungan Ai",
        description: "description",
      },
      {
        icon: SkillIcon,
        title: "Pemberdayaan SDM",
        description: "description",
      },
    ];

    function ServiceCard({ Icon, title, description }: serviceProps) {
      return (
        <div className="flex flex-col justify-around bg-white px-4 py-6 items-center w-80 h-96 rounded-md outline outline-4 outline-primary">
          <div className=" w-32 h-32 text-primary">
            <Icon />
          </div>
          <div className="flex flex-col gap-4 text-center mx-auto w-[72%]">
            <span className="font-semibold text-2xl">{title}</span>
            <span>{description}</span>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#323233] h-[720px] flex flex-col justify-around py-16 outline outline-2 px-[10%]">
        <div className="text-white flex flex-col gap-y-4">
          <span className="font-semibold text-4xl">Layanan</span>
          <span>Deskripsi</span>
        </div>
        <div className="flex w-full justify-evenly text-primary mt-8">
          {serviceList.map((item) => (
            <ServiceCard
              key={item.title}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen mb-9">
      <Masthead />
      <AboutSection />
      <ServiceSection />\{" "}
    </div>
  );
}
