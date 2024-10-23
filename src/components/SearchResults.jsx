"use client";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mb-5 mt-3 text-sm text-gray-600">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => {
        const faviconUrl =
          result.pagemap?.cse_thumbnail?.[0]?.src ||
          "https://www.google.com/s2/favicons?sz=64&domain=" +
            new URL(result.link).hostname;

        return (
          <div className="mb-8 max-w-xl" key={result.link}>
            <div className="group mb-2 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt={`${result.displayLink} favicon`}
                className="mr-3 size-8 rounded-full outline outline-1 outline-gray-300"
              />
              <div className="flex flex-col">
                <Link
                  href={result.link}
                  className="truncate text-xl font-medium text-blue-800 decoration-blue-800 group-hover:underline"
                >
                  {result.title}
                </Link>
                <Link
                  href={result.link}
                  className="mb-1 text-gray-500"
                >
                  {result.formattedUrl}
                </Link>
              </div>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        );
      })}
      <PaginationButtons />
    </div>
  );
}
