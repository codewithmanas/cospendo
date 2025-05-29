import type { Metadata } from "next";
import "@/styles/tailwind.css";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Cospendo | Home",
  description: "An App for Friends to Split Money Seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
