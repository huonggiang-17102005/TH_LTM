import { useState } from "react"
import LoginPage from "@/pages/login/LoginPage"
import RegisterPage from "@/pages/login/RegisterPage"

export default function App() {
  const [screen, setScreen] = useState<"login" | "register">("login")

  if (screen === "register") {
    return (
      <RegisterPage
        onGoToLogin={() => setScreen("login")}
        onRegister={(user, pass) => {
          console.log("Đăng ký thành công:", user, pass)
          setScreen("login")
        }}
      />
    )
  }

  return (
    <LoginPage
      onGoToRegister={() => setScreen("register")}
      onLogin={(user, pass) => console.log("Đăng nhập:", user, pass)}
    />
  )
}