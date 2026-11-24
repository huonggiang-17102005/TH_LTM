import { cn } from "@/lib/utils"

interface RetroBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function RetroBackground({
  children,
  className,
  ...props
}: RetroBackgroundProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-4 bg-retro-checker select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}