"use client";
import Image from "next/image";
import { SettingsIcon } from "lucide-react";
import Messages from "@/components/Messages";
import Recorder, { mimeType } from "@/components/Recorder";
import { useRef } from "react";
import { useFormState } from "react-dom";
import transcript from "@/actions/transcript";

const initialState = {
  sender: "",
  response: "",
  id: "",
};

export default function Home() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const [state, formAction] = useFormState(transcript, initialState);

  const uploadAudio = (blob: Blob) => {
    // const url = URL.createObjectURL(blob);
    const file = new File([blob], "audio.webm", { type: mimeType });

    // 숨김 파일 입력
    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;

      // 클릭 후 제출
      if (submitRef.current) {
        submitRef.current.click();
      }
    }
  };

  return (
    <main className="bg-black h-screen overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5">
        <Image
          className="object-contain"
          alt="Logo"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq9LJak45k1eZi_TyWyOSy5nU3KetpbfDluj9aty3-1WptLYlvwfZTZIOiaJtf1LPxx0WEsO-XXzOCDlPpY4ymL1Rm8tgdZ1yUOnQbsgUT8Ri1CEA12UGV7lNISQ66dAWvB7QWj0kRlOBa/s1600/3034007-slide-s-3-whats-the-difference-between-a-logo-and-a-symbol.jpg"
          width={50}
          height={50}
        ></Image>

        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-slate-500 text-black transition-all ease-in-out duration-150 hover:bg-slate-700 hover:text-white"
        ></SettingsIcon>
      </header>

      {/* Form */}
      <form action={formAction} className="flex flex-col bg-black">
        <div className="flex-1 bg-gradient-to-b from-slate-100 to-black">
          <Messages></Messages>
        </div>

        <input type="file" name="audio" hidden ref={fileRef}></input>

        <button type="submit" hidden ref={submitRef}></button>

        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
          <Recorder uploadAudio={uploadAudio}></Recorder>

          <div></div>
        </div>
      </form>
    </main>
  );
}
