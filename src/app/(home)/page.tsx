import Image from "next/image";
import JobshareIcon from "/public/assets/icon/job-share.svg";
import AiIcon from "/public/assets/icon/ai.svg";
import SkillIcon from "/public/assets/icon/skill.svg";
import CvIcon from "/public/assets/icon/cv.svg";
import ChatIcon from "/public/assets/icon/chatbot.svg";
import PlussIcon from "/public/assets/icon/pluss.svg";
import { ComponentType, FunctionComponent } from "react";

export default function Home() {
  interface serviceProps {
    Icon: ComponentType;
    title: string;
    description: string;
  }

  function Masthead() {
    return (
      <div className="w-full h-[70%] md:h-screen flex text-white relative">
        <Image
          src={"/assets/img/masthead.png"}
          fill
          alt="masthead"
          className="w-full h-auto absolute -z-10"
        />
        <div className=" flex w-full h-fit flex-col self-center px-[5%] pt-16">
          <span className="text-6xl md:text-8xl font-bold">Quire</span>
          <span className="my-5 max-w-[40%] font-light text-sm md:text-lg">
            Menjembatani dirimu dengan berbagai platform penyedia kerja serta
            mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan
            dirimu
          </span>
          <button className="bg-primary w-fit px-3 md:px-6 py-1 md:py-4 rounded-md font-medium text-sm md:text-xl">
            Cari Pekerjaan Incaranmu
          </button>
        </div>
      </div>
    );
  }

  function ServiceSection() {
    const serviceList = [
      {
        icon: JobshareIcon,
        title: "Koleksi Loker",
        description: "Kami mengumpulkan loker dari berbagai sumber dan menyediakannya dalam satu halaman untuk anda.",
      },
      {
        icon: AiIcon,
        title: "Integrasi Ai",
        description: "Manfaatkan AI kami untuk pencocokan kerja yang canggih dan mendapatkan tips dan trik karir yang berarti untuk Anda.",
      },
      {
        icon: SkillIcon,
        title: "Skill Up",
        description: "Dengan konten e-course kami, Anda dapat belajar dan meningkatkan keterampilan Anda, membuka lebih banyak peluang di dunia kerja",
      },
      {
        icon: CvIcon,
        title: "CV",
        description: "Optimalkan cv anda untuk setiap lowongan pekerjaan yang akan anda daftar, meningkatkan peluang lolos lebih tinggi.",
      },
      {
        icon: ChatIcon,
        title: "Chatbot",
        description: "Personalisasi pengalaman anda dalam mencari lowongan pekerjaan dan dapatkan tips dan trik untuk meraih karir impian.",
      }
    ];

    function ServiceCard({ Icon, title, description }: serviceProps) {
      return (
        <div className="flex flex-col bg-white px-4 py-6 items-start w-[30%] md:w-[24%] rounded-md hover:shadow-2xl">
          <div className="flex w-14 p-2 text-primary bg-altBg rounded-full">
            <Icon />
          </div>
          <div className="flex flex-col mt-4 mb-2 w-full">
            <span className="font-semibold text-2xl">{title}</span>
            <span className="text-sm hidden sm:block">{description}</span>
          </div>
          <span className="text-sm mt-auto hover:text-white hover:bg-primary hover:px-2 py-1 rounded-full">Baca</span>
          </div>
      );
    }

    return (
      <div className="bg-white h-auto flex flex-col justify-around py-16 px-[5%]">
        <div className="flex flex-col gap-y-4 items-center text-center text-primary">
          <span className="font-semibold text-3xl md:text-6xl">Inovasi yang kami tawarkan</span>
          <span className="text-xs md:text-base w-[60%]">Menjembatani dirimu dengan berbagai platform penyedia kerja serta mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan dirimu</span>
        </div>
        <div className="flex flex-wrap w-full gap-y-12 md:gap-y-8 justify-evenly md:gap-[6%] md:justify-center text-primary mt-8">
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

  function About(){

    function WhyUs(){

      const reasonPoin = [
        "Sumber lowongan pekerjaan yang komprehensif.",
        "Tidak menggantikan peran platform rekrutmen.",
        "Membantu memahami dan memenuhi tren pekerjaan.",
        "Meningkatkan efisiensi pencarian dan pencocokan pelamaran kerja."
      ]

      function Point({ text }: {text: string}){

        return (
          <div className="flex w-full md:text-3xl gap-2">
            <div className="bg-primary text-white text-center w-4 md:w-[28px] md:p-[2px] h-fit mt-1 rounded-full">
              <PlussIcon />
            </div>
            <span className="font-medium">
              { text }
            </span>
          </div>
        )
      }

      return (
        <div className="w-full h-[256px] md:h-[512px] flex justify-between">
          <div className="flex size-[256px] md:size-[512px] relative">
            <Image src={"/assets/img/about-1.png"} alt="why us ?" fill className="rounded-lg" />
          </div>
          <div className="ml-[2%] w-[56%] flex flex-col justify-between">
            <span className="font-semibold text-3xl md:text-6xl text-primary pb-[2%]">
              Mengapa kami ?
            </span>
            <div className="h-[76%] flex flex-col justify-between">
              {reasonPoin.map((value, index) => (
                <Point
                  key={index}
                  text={value}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    function JoinUs(){
      return (
        <div className="w-full h-[256px] md:h-[512px] flex justify-between mt-12 md:mt-24">
          <div className="ml-[2%] w-[56%] flex flex-col justify-between">
            <span className="font-semibold text-3xl md:text-6xl text-primary rounded-md">
              Masa depan bersama Quire
            </span>
            <div className="flex flex-col text-xs font-medium text-pretty md:text-2xl">
              <span>
                Gunakan Quire, aplikasi lowongan kerja luas, sebagai standar
                pencarian karir Anda. Kami membantu Anda menemukan peluang kerja
                relevan dan mengajak Anda untuk berkontribusi dalam perkembangan
                Quire.
              </span>
              <span className="mt-2">
                Kami di Quire tidak bertujuan untuk menggantikan peran platform
                rekrutmen pekerjaan lainnya, melainkan mengajak Anda untuk
                bermitra. Temukan pelamar kerja yang luas dan berkualitas. Mari
                bekerja sama dengan Quire dan bersama-sama kita bangun masa
                depan yang lebih baik.
              </span>
            </div>
            <div className="text-white bg-primary rounded-sm w-fit px-2 md:px-4 py-1 md:py-2 text-xs md:text-2xl font-semibold">
              Kontak Kami
            </div>
          </div>
          <div className="flex size-[256px] md:size-[512px] relative">
            <Image src={"/assets/img/about-2.png"} alt="why us ?" fill className="rounded-lg"/>
          </div>
        </div>
      );
    }

    return(
      <div className="block h-auto bg-altBg py-12 md:py-32 px-[5%]">
        <WhyUs />
        <JoinUs />
      </div>
    )
  }

  

  return (
    <div className="w-full h-screen mb-8">
      <Masthead />
      <ServiceSection />
      <About />
    </div>
  );
}
