import Image from "next/image";
import logo from "../../assets/watchdogs.svg";

export default function Title() {
  return (
    <div className="flex justify-center items-center">
      <Image className="w-36 h-36" src={logo} alt="Thera logo" />
      <h1 className="text-6xl font-bold">Thera</h1>
    </div>
  );
}
