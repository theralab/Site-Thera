// TODO: Menu de hamburguer para mobile e navbar para desktop
import Image from "next/image";
import logo from "../../assets/watchdogs.svg";

export default function Header() {
  return (
    <div className="flex flex-row justify-start items-center py-2">
      <Image className="w-8" src={logo} alt="Thera logo" />
      <h1 className="ml-2 text-2xl">Thera Academy</h1>
    </div>
  );
}
