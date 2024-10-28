'use client'
import { SessionProvider } from "next-auth/react"

export default function GoogleProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>
}
