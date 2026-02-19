"use client"

import { useState } from "react"

const videos = [
  {
    id: "Vlxv2ORanCk",
    title: "Live Performance",
  },
]

export function Videos() {
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <section id="videos" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Watch
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto" />
        </div>

        {/* Main Video Player */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
            <iframe
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
              title={videos[activeVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(index)}
              className={`relative w-40 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                activeVideo === index
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {activeVideo === index && (
                <div className="absolute inset-0 bg-primary/20" />
              )}
            </button>
          ))}
        </div>

        
      </div>
    </section>
  )
}
