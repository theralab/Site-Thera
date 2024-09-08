import ToolGrid from "../ToolGrid/ToolGrid";
import DivToolCards from "../ToolGrid/DivToolCards";

export default function ToolSection() {
  return (
    <div>
      <div className="p-4 bg-gradient-to-t from-slate-50 to-zinc-100 md:p-8 lg:p-24 xl:flex xl:justify-center xl:p-40">
        <div className="xl:flex-col xl:w-96 xl:justify-center">
          <span className="text-title font-semibold">
            E as melhores ferramentas também
          </span>
          <p className="font-light text-sm mt-3 leading-relaxed">
            Para um dominio eficiente é necessário ter dominio de algumas
            tecnologias.
          </p>
        </div>
        <div className="lg:mt-5 xl:mt-0">
          <div className="block lg:hidden">
            <ToolGrid />
          </div>
          <div className="hidden lg:block ml-10">
            <DivToolCards />
          </div>
        </div>
      </div>
    </div>
  );
}
