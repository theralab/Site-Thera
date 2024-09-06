import Image from "next/image";
import logo from "../../assets/watchdogs.svg";
import SubTitle from "./SubTitle";
import Slogan from "./Slogan";

const styleRemoved = "bg-gradient-to-t from-pink-500 to-violet-500"

export default function TitleSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-pink-500 to-violet-500">
      <div className="flex mt-4 flex-row">
        <Image className="w-32" src={logo} alt="Thera logo" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white font-semibold">Thera</h1>
          <SubTitle />
        </div>
      </div>
      <Slogan />
    </div>
  );
}
