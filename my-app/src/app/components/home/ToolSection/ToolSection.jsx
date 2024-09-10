import ToolGrid from "./ToolGrid/ToolGrid.jsx";
import DivToolCards from "./DivToolCards/DivToolCards.jsx";

export default function ToolSection() {
  return (
    <div>
      <div className="p-4 lg:bg-gradient-to-t from-slate-50 to-zinc-100 md:p-8 lg:p-24 xl:flex xl:justify-evenly xl:p-46">
        <div className="xl:flex-col xl:w-96 xl:justify-centerl">
          <span className="text-title 2xl:text-3xl 2xl:w-36 font-semibold">
            E as melhores ferramentas também
          </span>
          <p className="font-light text-sm 2xl:text-lg mt-3 leading-relaxed">
            Para um dominio eficiente é necessário ter dominio de algumas
            tecnologias.
          </p>
        </div>
        <div className="lg:mt-5 xl:mt-0">
          <div className="block lg:hidden">
            <ToolGrid />
          </div>
          <div className="hidden lg:block ">
            <DivToolCards />
          </div>
        </div>
      </div>
    </div>
  );
}
