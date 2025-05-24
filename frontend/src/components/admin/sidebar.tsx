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

  const getCookie = (name: string): string => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop()!.split(';').shift() || '');
  return '';
};

const handleLogout = async () => {
  try {
    // Ambil CSRF cookie dulu
    await fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });

    // Ambil token CSRF dari cookie
    const csrfToken = getCookie("XSRF-TOKEN");
    if (!csrfToken) throw new Error("CSRF token tidak ditemukan.");

    // Panggil API logout dengan header X-XSRF-TOKEN
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-XSRF-TOKEN": csrfToken,
      },
    });

    // Bersihkan cookie atau localStorage jika ada (opsional)
    // Contoh hapus cookie bernama 'role' atau lainnya
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Redirect ke halaman login pakai replace supaya tidak bisa back
    router.replace("/login");
  } catch (error) {
    console.error("Gagal logout:", error);
  }
};

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
