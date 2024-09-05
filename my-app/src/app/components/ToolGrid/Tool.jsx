import Image from "next/image";
export default function Tool(props) {
  const size = 80
  return (
    <div className=" flex justify-center">
      <div className="w-fit shadow-violet-700 drop-shadow-md bg-white p-6 border rounded-md">
        <Image
          src={props.symbol}
          alt="tool"
          width={size}
          height={size}
          priority={true}
        />
      </div>
    </div>
  )
}
