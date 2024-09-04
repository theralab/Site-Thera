import Header from "./components/home/Header";
import TitleSection from "./components/home/TitleSection";
import AboutSection from "./components/home/AboutSection";
import Presentation from "./components/home/Presentation";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="mx-3">
        <Header />
      </div>
      <main>
        <TitleSection />
        <AboutSection />
        <Presentation />
      </main>
    </div>
  );
}
