import ImageResults from "@/components/SearchResults/ImageResults"
import Link from "next/link"
import React from "react"
import { redirect } from "next/navigation"

export default async function Images_Page({ searchParams }) {
  const startIndex = searchParams.start || "1"
  //check to see if there is content to search and if not then redirect to main page
  if (!searchParams.searchTerm.trim()) {
    redirect("/")
  }
  const resposne = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)
  if (!resposne.ok) throw new Error("Something went wrong")
  const data = await resposne.json()
  const resaults = data.items || null

  if (!resaults) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4 text-3xl">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else
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

  return <div>{resaults && <ImageResults results={data} />}</div>
}
