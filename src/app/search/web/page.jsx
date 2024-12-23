import EmptySearchWarning from "@/components/EmptySearchWarning"
import NoResultsFound from "@/components/NoResultsFound"
import SearchResaults from "@/components/SearchResults/SearchResults"

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
    return <NoResultsFound searchTerm={searchParams.searchTerm} />
  }

  return <div>{resaults && <SearchResaults results={data} />}</div>
}
