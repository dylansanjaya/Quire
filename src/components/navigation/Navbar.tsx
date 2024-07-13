"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";

import { IoPerson } from "react-icons/io5";

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
      title: "Cari Lowongan",
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
                  const isActive = pathname.endsWith(link.href);
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
                  <Button variant={"secondary"}
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
      <div className="flex rounded-xl bg-[#4945C4] h-20  w-[96%] z-50 fixed bottom-[2%] mx-[2%] shadow-2xl md:hidden">
        <div className="Menus flex p-8 items-center w-full justify-around text-3xl text-background">
          {links2.map((link, index) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                href={link.href}
                key={index}
                className={`${isActive ? "text-4xl" : ""}`}
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
