import { cn } from "@/lib/utils"

interface RetroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function RetroCard({ children, className, ...props }: RetroCardProps) {
  return (
    <div
      className={cn(
        "bg-[#fff6f9] border-[3.5px] border-[#3b1d37] shadow-[6px_6px_0px_#3b1d37] p-6 select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}