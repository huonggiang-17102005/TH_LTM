import { RetroBackground } from "@/components/ui/RetroBackground"
import { RetroCard } from "@/components/ui/RetroCard"
import { ErrorAlert } from "@/components/ui/ErrorAlert"
import { Sprite } from "@/components/ui/Sprite"
import { Button } from "@/components/ui/8bit/button"

export default function App() {
  return (
    <RetroBackground className="gap-6">
      {/* 1. Thử hộp kích cỡ VỪA (như form đăng nhập) */}
      <RetroCard className="w-full max-w-sm flex flex-col items-center gap-4">
        <Sprite id="castle" scale={4} />
        <h1 className="text-3xl font-bold retro text-primary">HỘP CỠ VỪA</h1>
        <ErrorAlert>Tên đăng nhập hoặc mật khẩu không đúng.</ErrorAlert>
        <Button className="w-full">NÚT THỬ NGHIỆM</Button>
      </RetroCard>

      {/* 2. Thử hộp kích cỡ TO (như bảng câu hỏi Quiz hoặc bảng xếp hạng) */}
      <RetroCard className="w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold retro text-[#3b1d37]">
          HỘP CỠ TO: BẢNG CÂU HỎI QUIZ HOẶC KẾT QUẢ
        </h2>
        <p className="retro text-lg mt-2 text-muted-foreground">
          Khung tự động giãn to theo chiều ngang mà viền và bóng đổ pixel vẫn giữ nguyên!
        </p>
      </RetroCard>
    </RetroBackground>
  )
}