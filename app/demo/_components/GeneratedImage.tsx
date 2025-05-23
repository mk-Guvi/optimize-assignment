interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative min-h-44 aspect-square w-full overflow-hidden rounded-lg">
        <img loading="lazy" src={imageUrl} alt="Generated artwork" className="object-cover" />
      </div>
    </div>
  );
}
