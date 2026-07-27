"use client";

import Link from "next/link";
import { useState } from "react";

type ExternalEmbedProps = {
  provider: "Spotify" | "YouTube";
  src: string;
  title: string;
  allow: string;
  containerClassName: string;
  iframeClassName?: string;
  allowFullScreen?: boolean;
};

export default function ExternalEmbed({
  provider,
  src,
  title,
  allow,
  containerClassName,
  iframeClassName = "h-full w-full border-0",
  allowFullScreen = false,
}: ExternalEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={src}
        title={title}
        allow={allow}
        allowFullScreen={allowFullScreen}
        className={iframeClassName}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-[#17120e] px-6 text-center ${containerClassName}`}
    >
      <div className="max-w-lg">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#d99b52]">
          External content
        </p>
        <p className="mt-4 text-sm leading-6 text-white/60">
          Loading this {provider} content connects your browser to {provider}.
          Data may be processed outside the EU.
        </p>
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#b56c2e] px-6 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#cb8240]"
        >
          Load {provider}
        </button>
        <p className="mt-4 text-[0.68rem] leading-5 text-white/35">
          By loading, you consent to this data transfer.{" "}
          <Link
            href="/datenschutz"
            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/60"
          >
            Privacy details
          </Link>
        </p>
      </div>
    </div>
  );
}
