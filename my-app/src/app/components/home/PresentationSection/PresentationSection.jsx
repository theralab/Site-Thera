import LanguagesGrid from "./LanguagesGrid/LanguagesGrid";

export default function PresentationSection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 to-violet-600 md:p-5 lg:p-20 xl:p-0 2xl:py-20">
        <div className="p-4 flex flex-col xl:flex-row xl:p-40 xl:justify-center xl:items-center 2xl:justify-evenly text-white">
          <div className="xl:w-96 xl:mx-10 2xl:mx-0 2xl:w-[500px]">
            <span className="text-title 2xl:text-3xl font-semibold 2xl:font-semibold">
              Aprenda qualquer linguagem de programação
            </span>
            <p className="text-gray-200 text-sm xl:text-md 2xl:text-lg mt-2 2xl:mt-4 leading-relaxed">
              Na Thera, todos tiveram o começo com alguma dessas linguagens.
              Então por que você não teria? Nós iremos lhe passar o caminho a
              ser seguido e no final haverá tarefas para concluir.
            </p>
          </div>
          <div className="2xl:mb-4">
            <LanguagesGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
