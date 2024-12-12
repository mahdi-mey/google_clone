import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Google",
  description: "Search Engine",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="h-dvh text-invertedText bg-scene overflow-hidden default-light">
          <main className="flex-col flex h-dvh justify-between">
            {children}
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
