export default function Card({ title, description }) {

  const styleCard = {

  }

  return (
    <div className="row-span-2 col-span-1 bg-gradient-to-r p-0.5 from-pink-500 to-violet-600  rounded-md ">
      <div className="bg-white pb-8 rounded px-4 pt-1.5 h-full">

        <p className="font-semibold text-lg mb-1.5">{title}</p>

        <p className="font-light lg:w-full w-48">{description}</p>
      </div>
    </div>
  )
}
