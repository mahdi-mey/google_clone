import Link from "next/link"
import PaginationButtons from "@/components/SearchResults/PaginationButtons"
import Image from "next/image"

export default function ImageSearchResults({ results }) {
  return (
    <div className="mt-4 pb-40 sm:pb-24">
      <div className="grid grid-cols-1 space-x-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={result.link}
                  alt={result.title}
                  className="otln h-60 w-full object-cover transition-shadow duration-300 group-hover:shadow-xl"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="mt-1.5 truncate text-xl group-hover:underline">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="truncate text-gray-600 group-hover:underline">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pl-16">
        <PaginationButtons />
      </div>
    </div>
  )
}
