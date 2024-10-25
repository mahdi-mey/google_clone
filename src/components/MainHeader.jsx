export default function MainHeader() {
  return (
    <header className="flex items-center justify-end gap-4 px-6 py-4 text-sm sm:gap-6 sm:px-8 sm:py-4">
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
      <button className="rounded-lg bg-blue-500 px-3 py-1.5 font-bold text-white sm:px-7 sm:py-3">
        Sign In
      </button>
    </header>
  )
}
