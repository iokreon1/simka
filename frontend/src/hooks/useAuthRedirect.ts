"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function useAuthRedirect() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/user", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })

        if (res.ok) {
          const user = await res.json()
          if (user?.role === "admin") {
            router.replace("/admin/dashboard")
          } else if (user?.role === "user") {
            router.replace("/user/dashboard")
          }
        }
      } catch (err) {
        // Not logged in or fetch failed, stay on login
      }
    }

    checkAuth()
  }, [router])
}
