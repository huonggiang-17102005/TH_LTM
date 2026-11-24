import { useState } from "react"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { Label } from "@/components/ui/8bit/label"
import { Sprite } from "@/components/ui/Sprite"

interface LoginPageProps {
  onGoToRegister?: () => void
  onLogin?: (username: string, password: string) => void
}

export default function LoginPage({ onGoToRegister, onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState<string | null>(
    "Tên đăng nhập hoặc mật khẩu không đúng."
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!username.trim() || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.")
      return
    }
    setErrorMessage(null)
    onLogin?.(username, password)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background select-none">
      {/* 1. Header: Logo Lâu đài + Tên game */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Sprite id="castle" scale={4} />
        <div className="flex flex-col text-left leading-[0.85] font-black tracking-widest text-primary retro">
          <span className="text-4xl md:text-5xl drop-shadow-[2px_2px_0_#ffffff]">
            QUIZ
          </span>
          <span className="text-4xl md:text-5xl drop-shadow-[2px_2px_0_#ffffff]">
            CASTLE
          </span>
        </div>
      </div>

      {/* 2. Khung Card 8-bit nguyên bản */}
      <Card font="retro" className="w-full max-w-[360px]">
        <CardContent className="p-6 flex flex-col gap-5">
          {/* 2 Tab chuyển đổi dùng nguyên Button 8-bit */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="default"
              font="retro"
              className="w-full text-lg cursor-default"
            >
              ĐĂNG NHẬP
            </Button>
            <Button
              type="button"
              variant="secondary"
              font="retro"
              onClick={onGoToRegister}
              className="w-full text-lg cursor-pointer"
            >
              ĐĂNG KÝ
            </Button>
          </div>

          {/* Form đăng nhập */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Input Tên đăng nhập */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="username" className="text-lg font-bold retro">
                Tên đăng nhập
              </Label>
              <Input
                id="username"
                type="text"
                font="retro"
                placeholder="vd: hiepsi_01"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            {/* Input Mật khẩu */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password" className="text-lg font-bold retro">
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                font="retro"
                placeholder="........"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {/* Thông báo lỗi */}
            {errorMessage && (
              <div className="border-2 border-foreground bg-destructive text-white px-3 py-1.5 text-center text-base retro tracking-wide">
                {errorMessage}
              </div>
            )}

            {/* Nút VÀO GAME 8-bit */}
            <Button
              type="submit"
              variant="default"
              font="retro"
              className="w-full mt-2 py-3 text-2xl tracking-wider"
            >
              VÀO GAME
            </Button>
          </form>

          {/* Link chuyển Đăng ký */}
          <div className="text-center text-base retro text-foreground">
            Chưa có tài khoản?{" "}
            <button
              type="button"
              onClick={onGoToRegister}
              className="font-bold underline underline-offset-2 hover:text-primary cursor-pointer"
            >
              Đăng ký ngay
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}