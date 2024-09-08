export default function Title() {
  return (
    <>
      {/* Exibe "Thera" para apenas para a versão mobile */}
      <h1 className="text-6xl text-white font-semibold block sm:hidden">
        Thera
      </h1>
      {/* Exibe "Thera Academy" para telas maiores */}
      <h1 className="text-3xl text-white font-bold hidden sm:block">
        Thera Academy
      </h1>
    </>
  );
}
