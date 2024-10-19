import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Search Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100dvh] flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
