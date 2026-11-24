import { useState } from "react"
import { RetroBackground } from "@/components/ui/RetroBackground"
import { RetroCard } from "@/components/ui/RetroCard"
import { ErrorAlert } from "@/components/ui/ErrorAlert"
import { Sprite } from "@/components/ui/Sprite"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <RetroBackground>
      {/* 1. Header: Logo Lâu đài + QUIZ CASTLE */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Sprite id="castle" scale={5} />
        <div className="flex flex-col text-left leading-[0.85] font-black tracking-widest text-primary retro">
          <span className="text-6xl md:text-7xl drop-shadow-[3px_3px_0_#ffffff]">
            QUIZ
          </span>
          <span className="text-6xl md:text-7xl drop-shadow-[3px_3px_0_#ffffff]">
            CASTLE
          </span>
        </div>
      </div>

      {/* 2. Khung Card dùng biến border-foreground */}
      <RetroCard className="w-full max-w-[360px] p-6 flex flex-col gap-5">
        {/* Tab ĐĂNG NHẬP / ĐĂNG KÝ */}
        <div className="flex border-[2.5px] border-foreground bg-[#fecbdf]">
          <Button
            type="button"
            className="flex-1 py-1.5 h-auto text-lg md:text-xl font-bold retro bg-primary text-primary-foreground hover:bg-primary rounded-none border-none border-r-[2.5px] border-foreground shadow-none cursor-default"
          >
            ĐĂNG NHẬP
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onGoToRegister}
            className="flex-1 py-1.5 h-auto text-lg md:text-xl font-bold retro text-foreground hover:bg-[#ffaecb] rounded-none border-none shadow-none cursor-pointer"
          >
            ĐĂNG KÝ
          </Button>
        </div>

        {/* Form nhập liệu */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Tên đăng nhập */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="text-foreground text-lg font-bold retro"
            >
              Tên đăng nhập
            </label>
            <Input
              id="username"
              type="text"
              placeholder="vd: hiepsi_01"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-auto bg-white border-[2.5px] border-foreground rounded-none px-3 py-1.5 text-lg retro text-foreground placeholder:text-muted-foreground shadow-none focus-visible:ring-0 focus-visible:border-primary"
              autoComplete="username"
              required
            />
          </div>

          {/* Mật khẩu */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-foreground text-lg font-bold retro"
            >
              Mật khẩu
            </label>
            <Input
              id="password"
              type="password"
              placeholder="........"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-auto bg-white border-[2.5px] border-foreground rounded-none px-3 py-1.5 text-lg retro text-foreground placeholder:text-muted-foreground shadow-none focus-visible:ring-0 focus-visible:border-primary"
              autoComplete="current-password"
              required
            />
          </div>

          {/* Hộp thông báo lỗi */}
          <ErrorAlert>{errorMessage}</ErrorAlert>

          {/* Nút VÀO GAME */}
          <Button
            type="submit"
            className="w-full h-auto mt-1 bg-primary hover:bg-primary/90 active:translate-y-0.5 rounded-none border-[3px] border-foreground shadow-[3px_3px_0px_#3b1d37] active:shadow-none py-2 text-2xl font-bold tracking-wider text-primary-foreground retro cursor-pointer transition-all"
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
            className="text-foreground font-bold underline underline-offset-2 hover:text-primary cursor-pointer"
          >
            Đăng ký ngay
          </button>
        </div>
      </RetroCard>
    </RetroBackground>
  )
}