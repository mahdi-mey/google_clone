import Link from "next/link"

export default function NoResultsFound({ searchTerm }) {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-4 text-3xl">
        No results found for {searchTerm}
      </h1>
      <p className="text-lg">
        Try searching the web or images for something else{" "}
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/confused.gif"
        className="w-2/5"
        alt="page not found image"
      />
    </div>
  )
}
