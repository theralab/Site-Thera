import Image from "next/image";
import logo from "../../assets/watchdogs.svg";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Slogan from "./Slogan";

export default function TitleSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-pink-500 to-violet-500  sm:py-40">
      <div className="flex mt-4 flex-row">
        <Image className="w-32 md:w-40 xl:w-52" src={logo} alt="Thera logo" />
        <div className="flex flex-col justify-center items-center sm:px-8">
          <Title />
          <SubTitle />
        </div>
      </div>
      <Slogan />
    </div>
  );
}
