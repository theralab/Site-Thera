import Image from "next/image";

export default function Tool(props) {
  const size = 50; // Tamanho da imagem

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center shadow-gray-400/50 shadow-md bg-white p-6 border rounded-xl h-[74px] w-32 sm:w-40 md:w-56">
        <Image
          src={props.symbol}
          alt="tool"
          width={size}
          height={size}
          priority={true}
          className="object-contain"
        />
      </div>
    </div>
  );
}
