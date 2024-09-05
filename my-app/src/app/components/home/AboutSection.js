import Image from "next/image";
import CS from "../../assets/Desenvolvimento.png";
import DivCards from "../BusinessCard/DivCards";

export default function AboutSection() {
  return (
    <div className="h-full justify-center items-center bg-gradient-to-t from-slate-50 to-zinc-100">
      <div className="flex flex-col justify-center items-center p-4">
        <span className="text-2xl font-semibold">Quem nós somos</span>
        <p className="text-sm font-extralight text-gray-700">
          Entenda sobre alguns detalhes
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* Melhorar responsividade quando implementar versão desktop */}
        <Image
          className="mx-3 w-screen sm:max-w-96"
          src={CS}
          alt="Computer Science"
        />
      </div>
      <DivCards />
    </div>
  );
}
