"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/images/hero-live.jpg",
      alt: "Joe Mac performing live with guitar",
      span: "col-span-2 row-span-2",
    },
    {
      src: "/images/joe-20april-203rd-20-20karapiro-6.jpg",
      alt: "Live crowd dancing at Joe Mac show",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/joemac-010226.jpg",
      alt: "Joe Mac acoustic performance",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/dumpweed-gisbornesmash-210226.jpg",
      alt: "Dumpweed concert poster",
      span: "col-span-2 row-span-1",
    },
  ]

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Gallery
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
