import Image from 'next/image';

export default function ToolCard({ image, imageDescription, title, description }) {
  return (
    <div className="pt-0.5 flex shadow-gray-400/80 shadow-md bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl">
      <div className="bg-white rounded-xl h-full w-full 2xl:w-64 py-5 px-4">
        <div className="flex flex-row items-start space-x-3">
          <Image
            src={image}
            alt={imageDescription}
            width={45}
            height={45}
            priority={true}
            className="object-contain"
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-lg mb-1.5">{title}</p>
            <p className="font-light lg:w-full w-48 md:text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
