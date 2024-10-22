export default function MainHeader() {
  return (
    <header className="flex items-center justify-end gap-6 px-8 py-4 text-sm">
      <a
        className="underline-offset-4 hover:underline"
        href="https://mail.google.com/mail/u"
        target="_blank"
      >
        Gmail
      </a>
      <a
        className="underline-offset-4 hover:underline"
        href="https://www.google.com/maps"
      >
        Maps
      </a>
      <button className="rounded-lg bg-blue-500 px-7 py-3 font-bold text-white">
        Sign In
      </button>
    </header>
  );
}
