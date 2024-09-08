import Header from "./components/home/Header";
import TitleSection from "./components/home/TitleSection";
import AboutSection from "./components/home/AboutSection";
import PresentationSection from "./components/home/PresentationSection";
import ToolSection from "./components/home/ToolSection";
import FooterSection from "./components/home/FooterSection";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <main className="scroll-smooth snap-mandatory snap-y">
        <div className="snap-center">
          <TitleSection />
        </div>

        <div className="snap-center">
          <AboutSection />
        </div>

        <div className="snap-center">
          <PresentationSection />
        </div>

        <div className="snap-center">
          <ToolSection />
        </div>

        <div className="snap-center">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
