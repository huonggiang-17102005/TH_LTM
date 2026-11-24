import RegisterPage from "@/pages/login/RegisterPage"

export default function App() {
  return (
    <RegisterPage
      onGoToLogin={() => console.log("Bấm chuyển sang đăng nhập")}
      onRegister={(user, pass) => console.log("Đăng ký với:", user, pass)}
    />
  )
}