import Header from "./components/home/Header/Header";
import TitleSection from "./components/home/TitleSection/TitleSection";
import AboutSection from "./components/home/AboutSection/AboutSection";
import PresentationSection from "./components/home/PresentationSection/PresentationSection";
import ToolSection from "./components/home/ToolSection/ToolSection";
import FooterSection from "./components/home/FooterSection/FooterSection";

export default function Home() {
  return (
    <div className="h-full">
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
