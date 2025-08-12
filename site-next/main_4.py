// components/ui/optimized-image.tsx
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  quality?: number
}

export async function getOptimizedImage(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )
  
  const {
    base64,
    img: { width, height, type },
  } = await getPlaiceholder(buffer, { size: 10 })
  
  return {
    base64,
    width,
    height,
    type,
  }
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  quality = 75,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL={base64}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}