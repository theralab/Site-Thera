export default function Language({ symbol, name }) {

  return (
    <div className="rounded-md col-span-1 row-span-1 flex px-8 py-4 bg-white w-min text-black font-bold">
      <image src={{ symbol }} alt={name} />
      <span>{name}</span>
    </div>
  )
}
