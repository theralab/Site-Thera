import Header from "./components/home/Header";
import Title from "./components/home/Title";
import Subtitle from "./components/home/SubTitle";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <Title />
        <Subtitle />
      </main>
    </div>
  );
}
