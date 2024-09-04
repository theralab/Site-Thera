import Language from "./Language";
import JS from "../../assets/language-js.png"
import PY from "../../assets/language-python.png"
import TS from "../../assets/language-ts.png"
import CPP from "../../assets/language-cpp.png"
import CS from "../../assets/language-cs.png"
import HTML from "../../assets/language-html.png"
import JAVA from "../../assets/springboot.svg"

export default function LanguagesGrid() {
  return (
    <div className="grid grid-cols-2 grid-flow-row">
      <Language name="JavaScript" symbol={JS} />
      <Language name="Python" symbol={PY} />
      <Language name="TypeScript" symbol={TS} />
      <Language name="C++" symbol={CPP} />
      <Language name="C#" symbol={CS} />
      <Language name="HTML" symbol={HTML} />
      <Language name="Java" symbol={JAVA} />
    </div>
  )
}
