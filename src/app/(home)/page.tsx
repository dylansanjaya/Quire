import Image from "next/image";
import Link from "next/link";
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
      <div className="w-full h-[70%] sm:h-[400px] md:h-screen flex text-white relative">
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
          <Link href={"/jobs"} className="bg-primary w-fit px-3 md:px-6 py-1 md:py-4 rounded-md font-medium text-sm md:text-xl">
            Cari Pekerjaan Incaranmu
          </Link>
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

  function Team(){

    const teamData = [
      {
        imageSrc: "/assets/img/raiz.jpg",
        name: "M Raiz Shiddiq P",
        title: "ML Developer"
      },
      {
        imageSrc: "/assets/img/veda.png",
        name: "Veda Bezaleel",
        title: "Project Manager"
      },
      {
        imageSrc: "/assets/img/dylan.jpg",
        name: "M Dylan Hikma S",
        title: "Web Developer"
      },
    ]

    function Member({imageSrc, name, title}: {imageSrc: string, name: string, title: string}){
      return (
        <div className="flex items-center flex-col">
          <div className="relative size-40">
            <Image src={imageSrc} alt="member" fill className="rounded-lg" />
          </div>
          <div className="flex flex-col mt-4 mb-2 text-center">
            <span className="font-semibold text-lg">
              {name}
            </span>
            <span className="font-light text-sm">
              {title}
            </span>
          </div>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center justify-between h-auto bg-white py-12 md:py-32 px-[5%]">
        <span className="text-3xl md:text-6xl font-bold text-primary mb-11">
          Meet our expert team
        </span>
        <div className="flex justify-between w-full">
          {
            teamData.map( (member, index) => (
              <Member key={index} imageSrc={member.imageSrc} name={member.name} title={member.title} />
             ))
          }
        </div>
      </div>
    )
  }

  function Footer() {
    const info = [
      {
        title: 'Pengguna',
        sub: [
          { title: 'Cari Lowongan', url: '#' },
          { title: 'Premium', url: '#' },
          { title: 'FAQ', url: '#' },
        ]
      },
      {
        title: 'Mitra',
        sub: [
          { title: 'Daftar Sekarang', url: '#' },
          { title: 'Tentang Mitra', url: '#' },
          { title: 'Pricing', url: '#' },
        ]
      }
    ];
  
    function FooterPage({ title, sub }: { title: string; sub: { title: string; url: string }[] }) {
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
    <div className="w-screen h-screen">
      <Masthead />
      <ServiceSection />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
