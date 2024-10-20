'use client'
import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }) {
  console.log(results.items[0]);
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => {
        // Extract the favicon URL from cse_thumbnail or use a default icon
        const faviconUrl =
          result.pagemap?.cse_thumbnail?.[0]?.src ||
          "https://www.google.com/s2/favicons?sz=64&domain=" +
            new URL(result.link).hostname;

        return (
          <div className="mb-8 max-w-xl" key={result.link}>
            <div className="group flex items-center mb-2">
              {/* Display the favicon image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt={`${result.displayLink} favicon`}
                className="size-8 outline outline-1 outline-gray-300 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <p>{result.pagemap.metatags[0]["application-name"]}</p>
                <Link
                  href={result.link}
                  className="text-gray-500 hover:underline mb-1"
                >
                  {result.formattedUrl}
                </Link>
              </div>
            </div>
            <Link
              href={result.link}
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        );
      })}
    </div>
  );
}
