import Link from "next/link";
import { Input } from "../ui/input";
import { MdArrowOutward } from "react-icons/md";

export default function ChatBot() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Chat dengan lowongan</h3>
      <Input placeholder="Tanyakan mengenai lowongan ini" className="max-w-96"/>
      <p className="font-semibold">Pertanyaan yang sering ditanyakan:</p>
      <div className="space-y-2">
        <Link href={"/jobs"} className="flex space-x-2 items-center hover:underline">
          <p>Point point klasifikasi pekerjaan</p>
          <MdArrowOutward />
        </Link>
        <Link href={"/jobs"} className="flex space-x-2 items-center hover:underline">
          <p>Point point yang bisa di masukan ke dalam CV</p>
          <MdArrowOutward />
        </Link>
        <Link href={"/jobs"} className="flex space-x-2 items-center hover:underline">
          <p>Kesimpulan pengalaman yang dibutuhkan</p>
          <MdArrowOutward />
        </Link>
        <Link href={"/jobs"} className="flex space-x-2 items-center hover:underline">
          <p>Pengalaman yang dibutuhkan untuk pekerjaan ini</p>
          <MdArrowOutward />
        </Link>
      </div>
    </div>
  );
}
