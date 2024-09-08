import LanguagesGrid from "../LanguagesGrid/LanguagesGrid";

export default function PresentationSection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 to-violet-600 md:p-5 lg:p-20 xl:p-0 2xl:p-20">
        <div className="p-4 flex flex-col xl:flex-row xl:p-40 xl:justify-center xl:items-center text-white">
          <div className="xl:w-96 xl:mx-10">
            <span className="text-title font-semibold">
              Aprenda qualquer linguagem de programação
            </span>
            <p className="text-gray-200 text-sm mt-2 leading-relaxed">
              Na Thera, todos tiveram o começo com alguma dessas linguagens.
              Então por que você não teria? Nós iremos lhe passar o caminho a
              ser seguido e no final haverá tarefas para concluir.
            </p>
          </div>
          <LanguagesGrid />
        </div>
      </div>
    </div>
  );
}
