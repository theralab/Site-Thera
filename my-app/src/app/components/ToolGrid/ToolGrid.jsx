import Tool from "./Tool";
import NEXT from "../../assets/nextjs.svg"
import REACT from "../../assets/react.svg"
import TAILWIND from "../../assets/tailwind.svg"
import GITHUB from "../../assets/github.svg"
import GIT from "../../assets/git.svg"
import VSCODE from "../../assets/vscode.svg"
import NODE from "../../assets/nodejs.svg"
import LINUX from "../../assets/linux.svg"
import SPRING from "../../assets/springboot.svg"

export default function ToolGrid() {

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-y-5 gap-x-2 py-4">
      <Tool symbol={NEXT} />
      <Tool symbol={REACT} />
      <Tool symbol={TAILWIND} />
      <Tool symbol={GITHUB} />
      <Tool symbol={GIT} />
      <Tool symbol={VSCODE} />
      <Tool symbol={NODE} />
      <Tool symbol={LINUX} />
      <Tool symbol={SPRING} />
    </div>
  )
}
