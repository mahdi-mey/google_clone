export default function EmptySearchWarning() {
  return (
    <div className="mx-auto w-max text-left">
      <h1 className="mt-7 text-lg font-semibold">
        Please Enter something to search the internet
      </h1>
      <p className="my-2">
        To find what you’re looking for, consider these search ideas:
      </p>
      <ul className="flex !list-disc flex-col gap-1 pl-4">
        <li className="justify-start">
          <h3 className="inline">Recent News: </h3>
          <p className="inline">Stay updated with the latest headlines.</p>
        </li>
        <li className="justify-start">
          <h3 className="inline">Local Events: </h3>
          <p className="inline">Type in “events near me”.</p>
        </li>
        <li className="justify-start">
          <h3 className="inline">Helpful Resources: </h3>
          <p className="inline">Look up “resources on [topic]”.</p>
        </li>
      </ul>
    </div>
  )
}
