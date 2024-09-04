export default function Card({ title, description }) {

  return (
    <div className="pt-0.5 snap-center drop-shadow-xl bg-gradient-to-r from-pink-500 to-violet-600 duration-300 rounded-md ">
      <div className="bg-white pb-8 rounded px-4 pt-1.5 h-full">
        <p className="font-semibold text-lg mb-1.5">{title}</p>
        <p className="font-light lg:w-full w-48">{description}</p>
      </div>
    </div>
  )
}
