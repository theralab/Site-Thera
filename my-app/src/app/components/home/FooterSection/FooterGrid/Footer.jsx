import Image from "next/image";

export default function Footer({ symbol, name }) {

  const size = 30

  return (
    <div>
      <Image
        width={size}
        height={size}
        src={symbol}
        alt={name} />
    </div>
  )
}
