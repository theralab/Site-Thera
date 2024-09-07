import ToolGrid from "../ToolGrid/ToolGrid";

export default function ToolSection() {
  return (
    <div>
      <div className="p-4">
        <span className="text-title font-semibold">
          E as melhores ferramentas também
        </span>
        <p className="font-light text-sm mt-3 leading-relaxed">
          Para um dominio eficiente é necessário ter dominio de algumas
          tecnologias.
        </p>
        <ToolGrid />
      </div>
    </div>
  );
}
