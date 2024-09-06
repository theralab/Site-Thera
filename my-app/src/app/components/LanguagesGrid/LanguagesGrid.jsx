import Language from "./Language";
import JS from "../../assets/language-js.png"
import PY from "../../assets/language-python.png"
import TS from "../../assets/language-ts.png"
import CPP from "../../assets/language-cpp.png"
import CS from "../../assets/language-cs.png"
import HTML from "../../assets/language-html.png"
import JAVA from "../../assets/language-java.png"
import JSON from "../../assets/language-json.png"
import MD from "../../assets/language-markdown.png"
import PHP from "../../assets/language-php.png"
import YAML from "../../assets/language-yaml.png"
import SHELL from "../../assets/language-powershell.png"

export default function LanguagesGrid() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 items-center grid-rows-2 gap-x-6 gap-y-4 my-4">
      <Language name="JavaScript" symbol={JS} />
      <Language name="Python" symbol={PY} />
      <Language name="TypeScript" symbol={TS} />
      <Language name="C++" symbol={CPP} />
      <Language name="C#" symbol={CS} />
      <Language name="HTML" symbol={HTML} />
      <Language name="Java" symbol={JAVA} />
      <Language name="JSON" symbol={JSON} />
      <Language name="Markdown" symbol={MD} />
      <Language name="Powershell" symbol={SHELL} />
      <Language name="PHP" symbol={PHP} />
      <Language name="YAML" symbol={YAML} />
    </div>
  )
}
