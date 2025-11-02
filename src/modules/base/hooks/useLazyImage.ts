import { useState, useEffect, useRef, useCallback } from "react";

interface UseLazyImageDynamicOptions {
  loader: () => Promise<{ default: string }>;
  fallback?: string;
}

interface UseLazyImageObserverOptions {
  src: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  onError?: () => void;
}

interface UseLazyImageDynamicReturn {
  src: string | null;
  isLoading: boolean;
  error: Error | null;
}

interface UseLazyImageObserverReturn {
  imgRef: React.RefObject<HTMLImageElement | null>;
  isLoaded: boolean;
  isInView: boolean;
  hasError: boolean;
  currentSrc: string;
  handleLoad: () => void;
  handleError: () => void;
}

export function useLazyImage(
  options: UseLazyImageDynamicOptions
): UseLazyImageDynamicReturn;
export function useLazyImage(
  options: UseLazyImageObserverOptions
): UseLazyImageObserverReturn;

export function useLazyImage(
  options: UseLazyImageDynamicOptions | UseLazyImageObserverOptions
): UseLazyImageDynamicReturn | UseLazyImageObserverReturn {
  if ("loader" in options) {
    return useLazyImageDynamic(options);
  }

  return useLazyImageObserver(options);
}

const useLazyImageDynamic = ({
  loader,
  fallback = "",
}: UseLazyImageDynamicOptions): UseLazyImageDynamicReturn => {
  const [src, setSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const imageModule = await loader();

        if (isMounted) {
          setSrc(imageModule.default);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err : new Error("Failed to load image")
          );
          setSrc(fallback);
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [loader, fallback]);

  return { src, isLoading, error };
};

const useLazyImageObserver = ({
  src,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==",
  threshold = 0.1,
  rootMargin = "50px",
  onLoad,
  onError,
}: UseLazyImageObserverOptions): UseLazyImageObserverReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const currentSrc = isInView ? src : placeholder;

  return {
    imgRef,
    isLoaded,
    isInView,
    hasError,
    currentSrc,
    handleLoad,
    handleError,
  };
};

export default useLazyImage;
