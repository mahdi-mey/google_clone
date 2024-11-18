"use client"
import { signIn } from "next-auth/react"

export default function MainHeader() {
  return (
    <header className="flex items-center justify-end gap-4 px-6 py-4 text-sm sm:gap-6 sm:px-8 sm:py-4">
      <a
        className="rounded-lg text-lightText shadow-shadowColor shadow-md bg-scene px-3 py-1.5 underline-offset-4 hover:underline sm:px-7 sm:py-3"
        href="https://mail.google.com/mail/u"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gmail
      </a>
      <a
        className="rounded-lg text-lightText shadow-shadowColor shadow-md bg-scene px-3 py-1.5 underline-offset-4 hover:underline sm:px-7 sm:py-3"
        href="https://www.google.com/maps"
      >
        Maps
      </a>
      <button
        onClick={() => signIn("google")}
        className="rounded-lg bg-primary px-3 py-1.5 font-bold sm:px-7 sm:py-3 hover:shadow-lg transition-all text-mainText"
      >
        Sign In
      </button>
    </header>
  )
}
