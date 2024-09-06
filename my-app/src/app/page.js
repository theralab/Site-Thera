import Header from "./components/home/Header";
import TitleSection from "./components/home/TitleSection";
import AboutSection from "./components/home/AboutSection";
import Presentation from "./components/home/Presentation";
import ToolSection from "./components/home/ToolSection";

// TODO: Adicionar header com navbar (menu de navegação para mobile)

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
            <Presentation />
          </div>

          <div className="snap-center">
            <ToolSection />
          </div>
        </main>
      </div>
  );
}
