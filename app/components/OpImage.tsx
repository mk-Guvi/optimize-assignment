"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
};

function OpImage({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  sizes = "",
}: Props) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Skeleton - shown while loading */}
      {isImageLoading && (
        <div className="absolute inset-0 w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={src}
        width={width}
        className={`object-cover transition-opacity duration-300 ${
          !isImageLoading ? "opacity-100" : "opacity-0"
        } ${className}`}
        height={height}
        onLoad={() => setIsImageLoading(false)}
        onError={() => setIsImageLoading(false)}
      />
    </div>
  );
}

export default OpImage;
