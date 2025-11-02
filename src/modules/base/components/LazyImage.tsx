import React from "react";
import { useLazyImage } from "../hooks";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  style,
  placeholder,
  threshold,
  rootMargin,
  onLoad,
  onError,
}) => {
  const { imgRef, isLoaded, hasError, currentSrc, handleLoad, handleError } =
    useLazyImage({
      src,
      placeholder,
      threshold,
      rootMargin,
      onLoad,
      onError,
    });

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {!isLoaded && !hasError && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
        />
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;
