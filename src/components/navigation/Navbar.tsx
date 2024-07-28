"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";

import { IoPerson } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";



export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Cari Lowongan",
      href: "/jobs",
    },
    {
      title: "Skill Up",
      href: "/skill-up",
    },
  ];

  const links2 = [
    {
      title: "Beranda",
      href: "/",
      icon: <GoHomeFill />,
    },
    {
      title: "Lowongan",
      href: "/jobs",
      icon: <RiSearchFill />,
    },
    {
      title: "Skill Up",
      href: "/skill-up",
      icon: <FaBookOpen />,
    },
    {
      title: "Profile",
      href: "/login",
      icon: <IoPerson />,
    },
  ];
  const isActives = pathname.endsWith("/login");

  return (
    <>
      <div className="flex ">
        <div className="h-24 w-[96%] fixed z-50 top-[2%] mx-[2%]  items-center hidden md:block">
          <div className="p-8 w-full  rounded-xl bg-[#4945C4] shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="Logo font-bold text-xl text-background relative w-16 h-9 md:w-[88px] md:h-12">
                <Image src={"/assets/img/logo-font.png"} alt="logo font" fill />
              </div>
              <div className="Navigation">
                {links.map((link, index) => {
                  let isActive = pathname.endsWith(link.href);
                  return (
                    <Link
                      href={link.href}
                      key={index}
                      className={`Links text-background mx-4 ${
                        isActive ? "font-black" : "font-bold"
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
                <Link href="/login">
                  <Button
                    variant={"secondary"}
                    className={`text-foreground ${
                      isActives ? "font-black text-primary" : "font-bold"
                    }`}
                  >
                    Masuk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex bg-background h-[7vh] w-[100vw] z-50 fixed top-[0%] md:hidden p-4 px-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="Logo font-bold text-2xl text-primary">Quire</h1>
            {/* <IoIosMenu className="text-3xl text-primary"/> */}
          </div>
        </div>
        <div
          className="flex bg-background h-[10vh] w-[100vw] z-50 fixed bottom-[0%] md:hidden"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="Menus flex p-2 items-center w-full justify-around text-3xl text-background">
            {links2.map((link, index) => {
              let isActive = pathname.endsWith(link.href);
              return (
                <div
                  key={index}
                  className={`grid justify-items-center ${
                    isActive ? "text-primary text-4xl" : "text-gray-300"
                  }`}
                >
                  <Link href={`${link.href}`}>{link.icon}</Link>
                  <p className="text-xs">{link.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
