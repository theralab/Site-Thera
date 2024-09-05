import Image from "next/image";

export default function Language({ symbol, name }) {

  const size = 50

  return (
    <div className="rounded-md w-full flex items-center p-2 bg-white text-black font-bold">
      <Image
        className="bg-gray-300 rounded p-1"
        width={size}
        height={size}
        src={symbol}
        alt={name} />
      <span className="ml-4">{name}</span>
    </div>
  )
}