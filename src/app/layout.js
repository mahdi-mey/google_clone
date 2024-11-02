import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Search Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-dvh flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
