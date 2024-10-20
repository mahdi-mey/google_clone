import SearchResaults from "@/components/SearchResults";
import Link from "next/link";
import React from "react";

export default async function Web_Page({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const resposne = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );
  if (!resposne.ok) throw new Error("Something went wrong");
  const data = await resposne.json();
  const resaults = data.items;

  if (!resaults) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
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
    );
  }

  return <div>{resaults && <SearchResaults results={data} />}</div>;
}
