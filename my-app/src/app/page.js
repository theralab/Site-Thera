import Header from "./components/home/Header";
import TitleSection from "./components/home/TitleSection";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="mx-3">
        <Header />
      </div>
      <main>
        <TitleSection />
      </main>
    </div>
  );
}
