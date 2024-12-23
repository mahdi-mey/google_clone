import EmptySearchWarning from "@/components/EmptySearchWarning"
import SearchResaults from "@/components/SearchResults/SearchResults"
import Link from "next/link"

export default async function Web_Page({ searchParams }) {
  if (!searchParams.searchTerm) {
    return (
      <EmptySearchWarning />
    )
  }

  const startIndex = searchParams.start || "1"
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`,
  )
  if (!response.ok) throw new Error("Something went wrong")
  const data = await response.json()
  const resaults = data.items || null

  if (!resaults) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4 text-3xl">
          No results found for {searchParams.searchTerm}
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

  return <div>{resaults && <SearchResaults results={data} />}</div>
}
