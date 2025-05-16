"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-gray-700" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Menu</div>
              <Button variant="ghost" size="icon" className="text-gray-700" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="mt-8">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#beranda"
                    className="block py-3 px-4 text-gray-700 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#fitur"
                    className="block py-3 px-4 text-gray-700 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#manfaat"
                    className="block py-3 px-4 text-gray-700 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Manfaat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cara-kerja"
                    className="block py-3 px-4 text-gray-700 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Cara Kerja
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontak"
                    className="block py-3 px-4 text-gray-700 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-8 space-y-4">
              <Button variant="outline" className="w-full justify-start" size="lg">
                Masuk
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-sky-600 to-sky-700" size="lg">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
