import FooterGrid from "./FooterGrid/FooterGrid";

export default function FooterSection() {
  // TODO: Dar um jeito de passar a cor dos svg dinamicamente
  return (
    <div className="w-full h-full px-[15px] py-2.5 bg-[#2c2d2f] flex-col justify-start items-start gap-2.5 inline-flex sm:hidden">
      <FooterGrid />
    </div>
  );
}
