import { useEffect, useState } from "react";

type ImageLoaderProps = {
  url: string;
  title: string;
};

export function ImageLoader({ url, title }: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  function loadImage(url: string) {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = url;
  }

  useEffect(() => {
    loadImage(url);
  }, [url]);

  if (!isLoaded) return <div>Loading...</div>;
  return <img src={url} alt={title} className="block overflow-clip" />;
}
