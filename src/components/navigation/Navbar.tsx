"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const isActives = pathname.endsWith("/login");
  return (
    <div className="flex rounded-xl bg-[#4945C4] h-20 md:h-24 w-[96%] fixed z-50 top-[2%] mx-[2%] shadow-2xl">
      <div className="flex p-8 items-center w-full justify-between">
        <div className="Logo font-bold text-xl text-background relative w-16 h-9 md:w-[88px] md:h-12">
          <Image src={"/assets/img/logo-font.png"} alt="logo font" fill/>
        </div>
        <div className="Navigation">
          {links.map((link, index) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                href={link.href}
                key={index}
                className={`Links text-background mx-4 ${
                  isActive ? "font-bold" : "font-normal"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          <Button className="bg-background hover:bg-gray-200 mx-4 px-12">
            <Link
              href="/login"
              className={`text-foreground ${
                isActives ? "font-bold " : "font-normal"
              }`}
            >
              Log in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
