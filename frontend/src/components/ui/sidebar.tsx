"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, Menu } from "lucide-react"

import { cn } from "@/lib/utils"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => undefined,
})

interface SidebarProviderProps {
  children: React.ReactNode
  defaultIsOpen?: boolean
}

function SidebarProvider({ children, defaultIsOpen = true }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
}

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

const Sidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-screen border-r bg-background transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-12",
          className,
        )}
        {...props}
      />
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn("flex h-14 items-center border-b px-3", isOpen ? "justify-between" : "justify-center", className)}
        {...props}
      />
    )
  },
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn("no-scrollbar h-[calc(100vh-3.5rem)] overflow-y-auto py-2", isOpen ? "px-3" : "px-1", className)}
        {...props}
      />
    )
  },
)
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("pb-4", className)} {...props} />
  },
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    if (!isOpen) {
      return null
    }

    return <div ref={ref} className={cn("mb-1 px-2 text-xs font-medium text-muted-foreground", className)} {...props} />
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("space-y-1", className)} {...props} />
  },
)
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted",
  {
    variants: {
      isActive: {
        true: "bg-muted font-medium text-foreground",
        false: "text-muted-foreground",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    const { isOpen } = useSidebar()
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(sidebarMenuButtonVariants({ isActive }), isOpen ? "justify-start" : "justify-center", className)}
        {...props}
      />
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "absolute right-0 top-0 h-full w-1 -translate-x-1/2 cursor-ew-resize bg-transparent transition-all duration-300 ease-in-out hover:bg-muted",
          className,
        )}
        onDoubleClick={() => setIsOpen(!isOpen)}
        {...props}
      />
    )
  },
)
SidebarRail.displayName = "SidebarRail"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useSidebar()

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground",
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-screen flex-1 flex-col transition-all duration-300 ease-in-out",
          isOpen ? "ml-64" : "ml-12",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarInset.displayName = "SidebarInset"

export {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
}
