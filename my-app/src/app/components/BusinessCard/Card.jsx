export default function Card({ title, description }) {

  return (
    <div className="col-span-1 border pb-8 border-purple-600 rounded-md px-4 pt-1.5">
      <p className="font-semibold text-lg mb-1.5">{title}</p>
      <p className="font-light lg:w-full w-48">{description}</p>
    </div>
  )
}
