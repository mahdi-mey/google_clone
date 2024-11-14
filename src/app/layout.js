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
        <body className="flex h-dvh flex-col justify-between text-invertedText bg-scene overflow-hidden">
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
