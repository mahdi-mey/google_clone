"use client";
export default function Shortcut({ shrtct, faviconUrl }) {
  return (
    <a
      href={shrtct.url}
      key={shrtct.name}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-28 cursor-pointer flex-col items-center justify-evenly rounded-md transition-all hover:bg-gray-200"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-gray-300/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={faviconUrl}
          alt={`${shrtct.name} favicon`}
          className="h-6 w-6 rounded-full"
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
