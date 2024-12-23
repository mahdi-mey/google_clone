import EmptySearchWarning from "@/components/EmptySearchWarning"
import NoResultsFound from "@/components/NoResultsFound"
import ImageResults from "@/components/SearchResults/ImageResults"

export default async function Images_Page({ searchParams }) {
  if (!searchParams.searchTerm) {
    return (
      <EmptySearchWarning />
    )
  }

  const startIndex = searchParams.start || "1"
  const resposne = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`,
  )
  if (!resposne.ok) throw new Error("Something went wrong")
  const data = await resposne.json()
  const resaults = data.items || null

  if (!resaults) {
    return (
      <NoResultsFound searchTerm={searchParams.searchTerm} />
    )
  }

  return <div>{resaults && <ImageResults results={data} />}</div>
}
