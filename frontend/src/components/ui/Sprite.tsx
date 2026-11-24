import { SPRITES, type SpriteId } from "@/sprites"

type SpriteProps = {
  id: SpriteId
  /** Hệ số phóng, chỉ dùng số nguyên (1, 2, 3, 4...) để pixel không bị méo */
  scale?: number
  alt?: string
  className?: string
}

export function Sprite({ id, scale = 3, alt = "", className }: SpriteProps) {
  const sprite = SPRITES[id]
  const px = sprite.size * scale

  return (
    <img
      src={sprite.src}
      alt={alt}
      width={px}
      height={px}
      className={className}
      style={{ imageRendering: "pixelated" }}
      draggable={false}
    />
  )
}