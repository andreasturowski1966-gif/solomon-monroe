import type { Metadata } from "next";
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
        <a
          href="https://m.me/SolomonMonroeMusic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Solomon Monroe on Messenger"
          className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0866ff] px-4 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-2xl shadow-black/40 transition-transform hover:scale-[1.03] hover:bg-[#2378ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-7 sm:right-7 sm:px-5"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          >
            <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.46 5.52 3.74 7.22V22l3.42-1.88c.9.25 1.86.39 2.84.39 5.52 0 10-4.15 10-9.24S17.52 2 12 2Zm.99 12.48-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72-5.48 5.82Z" />
          </svg>
          <span className="hidden sm:inline">Message Solomon</span>
        </a>
      </body>
    </html>
  );
}
