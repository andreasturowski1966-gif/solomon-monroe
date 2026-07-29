import type { Metadata } from "next";
import GlobalUtilities from "./components/GlobalUtilities";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solomon Monroe | Southern Soul",
  description:
    "The official home of Solomon Monroe — Southern soul, stories lived in, and proof that dreams do not have an expiration date.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalUtilities />
      </body>
    </html>
  );
}
