"use client"

import Image from "next/image"
import { Bell, ChevronDown, LogOut, Menu, Search, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileSidebar } from "./mobile-sidebar"

interface HeaderProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-3">
            <Image
              src="/logo-dishub.png"
              alt="Logo Dinas Perhubungan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">DINAS PERHUBUNGAN</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">KABUPATEN KUDUS</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari pengajuan, kendaraan, atau dokumen..."
              className="w-full pl-10 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                  <span className="sr-only">Notifikasi</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifikasi</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-blue-800">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="hidden text-left md:block">
                  <p className="text-sm font-medium">Ahmad Fauzi</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pengguna</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Pengaturan</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifikasi</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Keluar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
