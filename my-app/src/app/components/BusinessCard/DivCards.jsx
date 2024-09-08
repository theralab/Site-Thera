import Card from "./Card";

export default function DivCards() {

  return (
    <div className="flex flex-row scroll-smooth sm:scroll-auto p-4 gap-x-5 overflow-scroll snap-x no-scrollbar md:grid md:grid-cols-2">
      <Card
        title="Boas-Vindas"
        description="Seja muito bem-vindo(a) ao Laboratorio 
        de Desenvolvimento de Sistemas da UEMA, um dos componentes do LEA."
      />
      <Card
        title="Objetivos"
        description="Nosso objetivo principal é unir o aprendizado 
        à prática com diferentes desafios reais, que com certeza vão 
        ser presentes em sua vida profissional."
      />
      <Card
        title="Nossas Atividades"
        description="Aqui na Thera, nós somos responsaveis, principalmente,
        por todo o desenvolvimento de software de qualquer âmbito requisitado
        pelo corpo acadêmico."
      />
      <Card
        title="Ambiente"
        description="Na maioria do tempo, as coisas no laboratório são 
        descontraídas. Sinta-se a vontade para conversar o que quiser
        com qualquer um de nos."
      />
    </div>
  )
}
