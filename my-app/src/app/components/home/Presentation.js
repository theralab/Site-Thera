import LanguagesGrid from "../LanguagesGrid/LanguagesGrid";

export default function Presentation() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-violet-600">
      <div className="p-4 flex flex-col h-screen text-white ">
        {/* TODO: Encontrar melhor organização para os textos (formatação) */}
        <div className="">
          <span className="text-2xl font-semibold">
            Aprenda qualquer linguagem de programação
          </span>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            Na Thera, todos tiveram o começo com alguma dessas linguagens. Então
            por que você não teria? Nós iremos lhe passar o caminho a ser seguido
            e no final haverá tarefas para concluir.
          </p>
        </div>
        <div>
          {/* TODO: Grid com as imagens das linguagens de programação */}
          <LanguagesGrid />
        </div>
      </div></div>
  );
}
