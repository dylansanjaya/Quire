import { Input } from "../ui/input";
import { MdArrowOutward } from "react-icons/md";
import { SmallButton } from "../ui/small_button";
import { IoMdSend } from "react-icons/io";

export default function ChatBot() {
  return (
    <div className="bg-background rounded-xl shadow-xl p-8">
      <div className="grid space-y-4 min-h-96">
        <h3 className="text-xl font-semibold">Chat dengan lowongan</h3>
        <div className="w-full self-end">
          <div className="flex space-x-2 mb-3 justify-end">
            <div
              className="flex space-x-2 items-center hover:bg-gray-100 p-1 border rounded-lg px-4 cursor-pointer"
            >
              <p>Point point klasifikasi pekerjaan</p>
              <MdArrowOutward />
            </div>
            <div
              className="flex space-x-2 items-center hover:bg-gray-100 p-1 border rounded-lg px-4 cursor-pointer"
            >
              <p>Point point yang bisa di masukan ke dalam CV</p>
              <MdArrowOutward />
            </div>
            <div
              className="flex space-x-2 items-center hover:bg-gray-100 p-1 border rounded-lg px-4 cursor-pointer"
            >
              <p>Kesimpulan pengalaman yang dibutuhkan</p>
              <MdArrowOutward />
            </div>
          </div>
          <div className="flex space-x-2">
            <Input placeholder="Tanyakan mengenai lowongan ini " />
            <SmallButton>
              <IoMdSend className="text-xl" />
            </SmallButton>
          </div>
        </div>
      </div>
    </div>
  );
}
