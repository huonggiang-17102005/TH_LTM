
export const SPRITES = {
  // ===== A: đăng nhập / menu =====
  castle: { src: "/assets/custom/castle.png", size: 16 },

  // ===== B: đội chơi =====

  // ===== C: bản đồ, tài nguyên =====

  // ===== D: lâu đài, vũ khí =====
} as const

export type SpriteId = keyof typeof SPRITES