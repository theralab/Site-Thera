import Github from "./FooterIcons/Github";
import Stackoverflow from "./FooterIcons/Stackoverflow";
import Reddit from "./FooterIcons/Reddit";
import Linkedin from "./FooterIcons/Linkedin";

const color = "#676767"; // cinza
const hoverColor = "#FFFFFF"; // branco

export default function FooterGrid() {
  return (
    <div className="w-[195px] h-[30px] justify-between items-center inline-flex cursor-pointer sm:hidden">
      <Github size={30} color={color} hoverColor={hoverColor}></Github>
      <Stackoverflow size={30} color={color} hoverColor={hoverColor}></Stackoverflow>
      <Reddit size={30} color={color} hoverColor={hoverColor}></Reddit>
      <Linkedin size={30} color={color} hoverColor={hoverColor}></Linkedin>
    </div>
  );
}
