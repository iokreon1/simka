"use client";

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
  BarChart3,
  ClipboardList,
  FileCheck,
  FileText,
  Home,
  LogOut,
  Map,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

export function NavItem({ href, icon, label, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
        active
          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

export function Sidebar() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        credentials: "include",
      })
      router.push("/login")
    } catch (error) {
      console.error("Gagal logout:", error)
    }
  }

  return (
    <nav className="flex h-full flex-col px-3 py-4">
      <div className="space-y-1">
        <NavItem href="/dashboard" icon={<Home className="h-5 w-5" />} label="Dashboard" active />
        <NavItem href="/perpanjangan-kartu" icon={<FileCheck className="h-5 w-5" />} label="Perpanjangan Kartu" />
        <NavItem href="/rekomendasi" icon={<FileText className="h-5 w-5" />} label="Pengajuan Rekomendasi" />
        <NavItem href="/rekapitulasi" icon={<BarChart3 className="h-5 w-5" />} label="Rekapitulasi Data" />
        <NavItem href="/riwayat" icon={<ClipboardList className="h-5 w-5" />} label="Riwayat & Tracking" />
        <NavItem href="/reminder" icon={<MessageSquare className="h-5 w-5" />} label="Smart Reminder" />
        <NavItem href="/pemetaan" icon={<Map className="h-5 w-5" />} label="Pemetaan Lokasi" />
      </div>
      <div className="mt-auto space-y-1 pt-4">
        <NavItem href="#" icon={<User className="h-5 w-5" />} label="Profil" />
        <NavItem href="#" icon={<Settings className="h-5 w-5" />} label="Pengaturan" />
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Keluar</span>
        </button>
      </div>
    </nav>
  )
}
