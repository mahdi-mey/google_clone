import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Search Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/google-logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="h-[100dvh] flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
