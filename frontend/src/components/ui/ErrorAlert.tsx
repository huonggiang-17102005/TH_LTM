import { cn } from "@/lib/utils"

interface ErrorAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function ErrorAlert({ children, className, ...props }: ErrorAlertProps) {
  // Nếu không có nội dung lỗi thì không render gì cả
  if (!children) return null

  return (
    <div
      className={cn(
        "border-[2.5px] border-[#8c2f23] bg-[#fce8eb] text-[#8c2f23] px-3 py-1.5 text-center text-base retro font-bold tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}