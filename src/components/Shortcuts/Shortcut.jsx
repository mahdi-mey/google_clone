'use client'
export default function Shortcut({shrtct, faviconUrl}) {
  return (
    <a
      href={shrtct.url}
      key={shrtct.name}
      target="_blank"
      rel="noopener noreferrer"
      className="size-28 flex rounded-md cursor-pointer flex-col items-center justify-evenly transition-all hover:bg-gray-200"
    >
      <div className="size-12 rounded-full bg-gray-300/80 flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={faviconUrl}
          alt={`${shrtct.name} favicon`}
          className="w-6 h-6 rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/default-web.jpg";
          }}
        />
      </div>
      <p className="text-sm">{shrtct.name}</p>
    </a>
  );
}
