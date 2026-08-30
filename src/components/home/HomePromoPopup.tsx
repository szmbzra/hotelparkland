"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Delay before the promo popup opens on homepage load, in milliseconds. */
const OPEN_DELAY_MS = 2000;

/**
 * Promotional popup shown automatically on the homepage. Opens on every
 * visit (no dismissal persistence) after a short delay. Portaled to
 * document.body so its fixed backdrop isn't confined by an ancestor's
 * transform, same reasoning as EnquiryModal.
 */
export default function HomePromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className="absolute inset-0 bg-luxury-dark/60 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-promo-title"
        className="relative w-full max-w-sm bg-white overflow-hidden"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full cursor-pointer bg-white/90 text-luxury-charcoal hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-4/5">
                  <p className=" mt-3 leading-relaxed container md:text-2xl  text-center mb-2.5 font-bold">
           Right Share Form
          </p>
            <Link href="ipoform.pdf" className="block h-full w-full"><Image
            src="/img/ipoform.jpg"
            alt="Hotel Parkland"
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover relative!"
          /></Link>
        </div>

        <div className="p-6 text-center">
                    <p className="text-sm leading-relaxed mb-3">
  Kindly download the application form and submit the filled form to our official Email:
  <a href="mailto:info@hotelparkland.com">info@hotelparkland.com</a>

                    </p>
          <Link
            href="ipoform.pdf" target="_blank" rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="luxury-btn  inline-flex cursor-pointer bg-(--color-primary-green) text-white">
            Download FORM <Download className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>,
    document.body
  );
}
