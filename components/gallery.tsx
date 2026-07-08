"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

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
      src: "/images/joe-wills-thelookout.png",
      alt: "Joe and Wills performing at The Lookout",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/dumpweed-dingdong-deskpov.png",
      alt: "Live band performance, audience view",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/joe-roy-thelookout.png",
      alt: "Joe and Roy with guitar and keyboards at The Lookout",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/joemacband-wedding-280226.png",
      alt: "Joe Mac Band performing at outdoor wedding reception under string lights, crowd dancing",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/dumpweed-band-with-crowd.png",
      alt: "Dumpweed band posing with an enthusiastic crowd after a live show",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/images/dumpweed-crowd-audience.png",
      alt: "Concert crowd with hands raised under pink and blue stage lights",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/images/dumpweed-red-stage.png",
      alt: "Dumpweed performing on stage under dramatic red lighting",
      span: "col-span-1 row-span-2",
    },
    {
      src: "/images/dumpweed-bassist-jumping.png",
      alt: "Bassist jumping mid-performance on stage with Marshall amps behind",
      span: "col-span-1 row-span-2",
    },
    {
      src: "/images/dumpweed-vocalist-bass.png",
      alt: "Vocalist singing and playing pink bass guitar on stage",
      span: "col-span-1 row-span-2",
    },
    {
      src: "/images/dumpweed-stage-bw.png",
      alt: "Black and white photo of Dumpweed performing on stage",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/images/dumpweed-kneeling-bass.png",
      alt: "Musician kneeling on stage playing a pink bass guitar",
      span: "col-span-1 row-span-1",
    },
  ]

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null

  const showPreviousImage = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((selectedImageIndex + 1) % images.length)
  }

  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImageIndex(null)
      if (event.key === "ArrowLeft") showPreviousImage()
      if (event.key === "ArrowRight") showNextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <div className="section-title-underline-blue" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
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
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousImage()
            }}
            className="absolute left-4 md:left-8 text-foreground/80 hover:text-[var(--neon-blue)] transition-colors"
          >
            <ChevronLeft className="h-10 w-10" />
            <span className="sr-only">Previous image</span>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedImageIndex(null)
            }}
            className="absolute top-6 right-6 text-foreground hover:text-[var(--neon-pink)] transition-colors"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNextImage()
            }}
            className="absolute right-4 md:right-8 text-foreground/80 hover:text-[var(--neon-blue)] transition-colors"
          >
            <ChevronRight className="h-10 w-10" />
            <span className="sr-only">Next image</span>
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
