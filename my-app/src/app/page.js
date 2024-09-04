import Header from "./components/home/Header";
import TitleSection from "./components/home/TitleSection";
import AboutSection from "./components/home/AboutSection";
import Presentation from "./components/home/Presentation";

// Adicionar para mobile 
const removedHeader = "<div className=mx-3><Header /></div>"

export default function Home() {
  return (
    <div className="h-full">
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
      </main>
    </div>
  );
}
