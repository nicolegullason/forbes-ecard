import Image from "next/image";

interface HeartImageProps {
  src: string;
  alt: string;
  size?: number;
}

export default function HeartImage({ src, alt, size = 210 }: HeartImageProps) {
  return (
    <div
      className="mx-auto flex-shrink-0"
      style={{ width: size, height: size, clipPath: "url(#heartClip)" }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
