import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Search Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/google-logo.png" /> {/* Path to your favicon */}
        <link rel="apple-touch-icon" href="/logo.png" /> {/* Optional */}
      </head>
      <body className="h-[100dvh] border flex flex-col justify-between border-red-500 ">
        {/*
            // MainHeader
            // GoogleSearch
            // Customize 
        */}
        {children}
      </body>
    </html>
  );
}
