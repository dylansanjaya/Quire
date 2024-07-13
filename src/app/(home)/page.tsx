import Image from "next/image";
import Link from "next/link";
import JobshareIcon from "/public/assets/icon/job-share.svg";
import AiIcon from "/public/assets/icon/ai.svg";
import SkillIcon from "/public/assets/icon/skill.svg";
import CvIcon from "/public/assets/icon/cv.svg";
import ChatIcon from "/public/assets/icon/chatbot.svg";
import PlussIcon from "/public/assets/icon/pluss.svg";
import { ComponentType, FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  interface serviceProps {
    Icon: ComponentType;
    title: string;
    description: string;
  }

  function Masthead() {
    return (
      // <div className="w-full min-h-lvh flex text-white relative aspect-video">
      //   <Image
      //     src={"/assets/img/masthead.png"}
      //     alt="img"
      //     layout="fill"
      //     objectFit="cover"
      //     className="w-full h-auto absolute -z-10 opacity-80"
      //     loading="lazy"
      //     draggable={false}
      //   />
      //   {/* <div className=" flex w-full h-fit flex-col self-center px-[5%] pt-16">
      //     <span className="text-6xl md:text-8xl font-bold">Quire</span>
      //     <span className="my-5 max-w-[40%] font-light text-sm md:text-lg">
      //       Menjembatani dirimu dengan berbagai platform penyedia kerja serta
      //       mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan
      //       dirimu
      //     </span>
      //     <Link
      //       href={{
      //         pathname: "/jobs",
      //       }}
      //     >
      //       {" "}
      //       <Button>Cari Pekerjaan Incaranmu</Button>
      //     </Link>
      //   </div> */}
      //   <div className="grid p-2">
      //     <div className="self-center space-y-4 w-96">
      //       {/* <h1 className="text-6xl font-bold">Quire</h1>
      //       <p>
      //         {" "}
      //         Menjembatani dirimu dengan berbagai platform penyedia kerja serta
      //         mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan
      //         dirimu
      //       </p>
      //       <div>
      //         <Link
      //           href={{
      //             pathname: "/jobs",
      //           }}
      //         >
      //           {" "}
      //           <Button>Cari Pekerjaan Incaranmu</Button>
      //         </Link>
      //       </div> */}
      //     </div>
      //   </div>
      // </div>

      <div className="p-4">
        <div className="relative grid min-h-[80vh] rounded-xl p-6">
          <Image
            src={"/assets/img/masthead.png"}
            alt="img"
            layout="fill"
            objectFit="cover"
            className="w-full h-auto absolute -z-10 rounded-xl"
            loading="lazy"
            draggable={false}
          />
          <div className="space-y-8 self-center">
            <h1 className="text-5xl font-bold text-pretty max-w-4xl text-background">
              menjembatani anda dengan berbagai platform penyedia kerja dan
              mengenal lebih jauh pekerjaan yang relevan dengan anda
            </h1>
            <div>
              <Link
                href={{
                  pathname: "/jobs",
                }}
              >
                {" "}
                <Button variant={"default"} className="w-40 ">
                  Cari Lowongan
                </Button>
              </Link>
            </div>
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
        description:
          "Kami mengumpulkan loker dari berbagai sumber dan menyediakannya dalam satu halaman untuk anda.",
      },
      {
        icon: AiIcon,
        title: "Integrasi AI",
        description:
          "Manfaatkan AI kami untuk pencocokan kerja yang canggih dan mendapatkan tips dan trik karir yang berarti untuk Anda.",
      },
      {
        icon: SkillIcon,
        title: "Skill Up",
        description:
          "Dengan konten e-course, Anda dapat belajar dan meningkatkan keterampilan Anda, membuka lebih banyak peluang di dunia kerja",
      },
      {
        icon: CvIcon,
        title: "CV",
        description:
          "Optimalkan cv anda untuk setiap lowongan pekerjaan yang akan anda daftar, meningkatkan peluang lolos lebih tinggi.",
      },
      {
        icon: ChatIcon,
        title: "Chatbot",
        description:
          "Personalisasi pengalaman anda dalam mencari lowongan pekerjaan dan dapatkan tips dan trik untuk meraih karir impian.",
      },
    ];

    function ServiceCard({ Icon, title, description }: serviceProps) {
      return (
        <div className="flex flex-col bg-white px-4 py-6 items-center w-full aspect-[4/3] max-w-96 rounded-md hover:shadow-2xl justify-center space-y-6">
          <div className="flex w-14 p-2 text-primary bg-altBg rounded-full">
            <Icon />
          </div>
          <div className="flex flex-col mt-4 mb-2 w-full items-center text-center space-y-2">
            <h4 className="font-semibold text-2xl">{title}</h4>
            <p className="text-sm ">{description}</p>
          </div>
          <Button
            variant={`outline`}
            className="text-sm mt-auto hover:text-white hover:bg-primary hover:px-2 py-1 rounded-full"
          >
            Baca
          </Button>
        </div>
      );
    }

    return (
      <div className="bg-white h-auto flex flex-col justify-around py-16 px-[5%] space-y-20">
        <div className="flex flex-col gap-y-4 items-center text-center">
          <h2 className="font-bold text-3xl md:text-6xl">
            Inovasi Yang Kami Tawarkan
          </h2>
          <p className="text-xs md:text-base w-[60%]">
            Menjembatani dirimu dengan berbagai platform penyedia kerja serta
            mengenal lebih jauh preferensi dan pekerjaan yang relevan dengan
            dirimu
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
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

  function About() {
    function WhyUs() {
      const reasonPoin = [
        "Sumber lowongan pekerjaan yang komprehensif.",
        "Tidak menggantikan peran platform rekrutmen.",
        "Membantu memahami dan memenuhi tren pekerjaan.",
        "Meningkatkan efisiensi pencarian dan pencocokan pelamaran kerja.",
      ];

      function Point({ text }: { text: string }) {
        return (
          <div className="flex w-full md:text-3xl gap-2">
            <div className="bg-primary text-white text-center w-4 md:w-[28px] md:p-[2px] h-fit mt-1 rounded-full">
              <PlussIcon />
            </div>
            <span className="font-medium">{text}</span>
          </div>
        );
      }

      return (
        // <div className="grid md:grid-cols-2 gap-8 w-full h-[256px] md:h-[512px] justify-center">
        //   <div className="flex relative w-full aspect-square max-w-96">
        //     <Image
        //       src={"/assets/img/about-1.png"}
        //       alt="img"
        //       layout="fill"
        //       objectFit="cover"
        //       className="rounded-lg aspect-square"
        //       loading="lazy"
        //       draggable={false}
        //     />
        //   </div>
        // <div className="flex flex-col space-y-4 items-start justify-center text-wrap">
        //   <h3 className="font-bold text-6xl text-primary pb-[2%] text-pretty ">
        //     Mengapa kami ?
        //   </h3>
        //   <ul className="flex flex-col list-inside text-pretty">
        //     {reasonPoin.map((value, index) => (
        //         <li className="text-wrap" key={index}>{value}</li>
        //     ))}
        //   </ul>
        // </div>
        // </div>
        <div className="space-y-8">
          <div className="flex flex-col  items-start justify-center text-wrap">
            <h3 className="font-bold text-6xl text-primary pb-[2%] text-pretty ">
              Mengapa kami?
            </h3>
            <div className="flex flex-col list-inside text-pretty">
              {reasonPoin.map((value, index) => (
                <li className="text-wrap" key={index}>
                  {value}
                </li>
              ))}
            </div>
          </div>
          <div className="flex flex-col  items-end text-right justify-center  text-pretty">
            <h3 className="font-bold text-6xl text-primary pb-[2%] text-pretty ">
              Masa depan bersama Quire
            </h3>
            <div className="space-y-2 max-w-xl text-semibold">
              <p>
                Gunakan Quire, aplikasi lowongan kerja luas, sebagai standar
                pencarian karir Anda. Kami membantu Anda menemukan peluang kerja
                relevan dan mengajak Anda untuk berkontribusi dalam perkembangan
                Quire.
              </p>
              <p>
                Kami di Quire tidak bertujuan untuk menggantikan peran platform
                rekrutmen pekerjaan lainnya, melainkan mengajak Anda untuk
                bermitra. Temukan pelamar kerja yang luas dan berkualitas. Mari
                bekerja sama dengan Quire dan bersama-sama kita bangun masa
                depan yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      );
    }

    function JoinUs() {
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
            <Image
              src={"/assets/img/about-2.png"}
              alt="img"
              layout="fill"
              objectFit="cover"
              className="rounded-lg aspect-[3/4]"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="w-100vw p-4">
        <div className="w-full bg-altBg rounded-xl py-16 px-8">
          <WhyUs />
          {/* <JoinUs/> */}
        </div>
      </div>
    );
  }

  function Team() {
    const teamData = [
      {
        imageSrc: "/assets/img/raiz.jpg",
        name: "M. Raiz Shiddiq P.",
        title: "Machine Learning Developer",
      },
      {
        imageSrc: "/assets/img/veda.png",
        name: "Veda Bezaleel",
        title: "Project Manager",
      },
      {
        imageSrc: "/assets/img/dylan.jpg",
        name: "M. Dylan Hikma S.",
        title: "Web Developer",
      },
    ];

    function Member({
      imageSrc,
      name,
      title,
    }: {
      imageSrc: string;
      name: string;
      title: string;
    }) {
      return (
        <div className="flex items-center flex-col">
          <div className="relative size-60">
            <Image
              src={imageSrc}
              alt="member"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-xl"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="flex flex-col mt-4 mb-2 text-center">
            <span className="font-semibold text-lg">{name}</span>
            <span className="font-light text-sm">{title}</span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-between h-auto bg-white py-12 md:py-32 px-[5%]">
        <span className="text-3xl md:text-6xl font-bold mb-11">
          Meet Our Expert Team
        </span>
        <div className="grid grid-rows md:grid-cols-3 w-full justify-center gap-4">
          {teamData.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    );
  }

  function Footer() {
    const info = [
      {
        title: "Pengguna",
        sub: [
          { title: "Cari Lowongan", url: "#" },
          { title: "Premium", url: "#" },
          { title: "FAQ", url: "#" },
        ],
      },
      {
        title: "Mitra",
        sub: [
          { title: "Daftar Sekarang", url: "#" },
          { title: "Tentang Mitra", url: "#" },
          { title: "Pricing", url: "#" },
        ],
      },
    ];

    function FooterPage({
      title,
      sub,
    }: {
      title: string;
      sub: { title: string; url: string }[];
    }) {
      return (
        <div className="flex flex-col max-w-[30%] h-full">
          <span className="font-bold mb-6">{title}</span>
          <ul className="leading-4">
            {sub.map((item) => (
              <li key={item.title} className="h-full">
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="footer flex items-start justify-between h-[348px] bg-[#252526] py-12 px-[5%] text-white">
        <div className="flex flex-col max-w-[30%] h-full">
          <div className="Logo font-bold text-xl text-background relative w-16 h-9 md:w-[88px] md:h-12">
            <Image src={"/assets/img/logo-font.png"} alt="logo font" fill />
          </div>
          <span>Capai karirmu dengan jalur yang cepat dan tepat.</span>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>23quire@gmail.com</div>
        </div>
        {info.map((item) => (
          <FooterPage key={item.title} title={item.title} sub={item.sub} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-vw h-screen">
      <Masthead />
      <ServiceSection />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
