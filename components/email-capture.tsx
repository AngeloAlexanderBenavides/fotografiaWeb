"use client"

import { useState } from "react"
import { Loader2, Lock } from "lucide-react"

interface EmailCaptureProps {
  onComplete: (email: string) => void
}

export function EmailCapture({ onComplete }: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simular proceso de guardado/análisis
    setTimeout(() => {
      onComplete(email)
    }, 1500)
  }

  return (
    <section className="w-full max-w-md mx-auto py-20 px-6 text-center">
      <div className="glass-bento p-8 md:p-12 relative overflow-hidden">

        {/* Icono de candado/seguridad */}
        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
          <Lock className="w-8 h-8" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Resultados Listos</h2>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          Hemos analizado tu perfil. Para enviarte tu diagnóstico personalizado y proteger tus resultados, por favor confirma tu correo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="ejemplo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generando Reporte...
              </>
            ) : (
              "Ver Mis Resultados →"
            )}
          </button>
        </form>

        <p className="text-[10px] text-gray-600 mt-6">
          Tus datos están 100% seguros. No enviamos spam.
        </p>
      </div>
    </section>
  )
}
