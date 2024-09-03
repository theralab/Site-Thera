export default function Slogan() {
  return (
    <div className="flex flex-col justify-center items-center text-white py-3 text-pretty">
      <h3 className="text-lg">
        {/* TODO: Melhor maneira de fazer isso (sem o br). Não consegui com text-balance*/}
        Inicie sua carreira conosco, com <br />
        projetos reais desde o começo
      </h3>
      <span className="font-extralight text-sm">
        Feito por alunos para alunos
      </span>
    </div>
  );
}
