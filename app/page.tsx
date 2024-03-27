import Image from "next/image";
import { SettingsIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <h1>Let's</h1>

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
      <form>
        <div></div>

        <input type="file" hidden></input>

        <button type="submit" hidden></button>
      </form>
    </main>
  );
}
