import Header from "./components/home/Header";
import Subtitle from "./components/home/SubTitle";
import DivCards from "./components/BusinessCard/DivCards";

import TitleSection from "./components/home/TitleSection";


export default function Home() {
  return (
    <div className="h-screen">
      <div className="mx-3">
        <Header />
      </div>
      <main>
        <TitleSection />
        <Subtitle />
        <DivCards />
      </main>
    </div>
  );
}
