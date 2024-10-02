import Header from "./components/home/Header/Header";
import TitleSection from "./components/home/TitleSection/TitleSection";
import AboutSection from "./components/home/AboutSection/AboutSection";
import PresentationSection from "./components/home/PresentationSection/PresentationSection";
import ToolSection from "./components/home/ToolSection/ToolSection";
import FooterSection from "./components/home/FooterSection/FooterSection";

export default function Home() {
  return (
    <div className="h-full">
      {/* O propósito dessa div é corrigir comportamento não desejável da animação da header */}
      <div className="bg-violet-550 absolute top-0 w-full h-[65px] z-100"></div>
      <Header />
      <main>
        <TitleSection />
        <AboutSection />
        <PresentationSection />
        <ToolSection />
        <FooterSection />
      </main>
    </div>
  );
}
