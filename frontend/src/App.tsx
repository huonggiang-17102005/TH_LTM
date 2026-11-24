import LoginPage from "@/pages/login/LoginPage"

export default function App() {
  return (
    <LoginPage
      onGoToRegister={() => console.log("Bấm chuyển sang đăng ký")}
      onLogin={(user, pass) => console.log("Đăng nhập với:", user, pass)}
    />
  )
}