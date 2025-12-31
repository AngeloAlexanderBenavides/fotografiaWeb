"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Zap } from "lucide-react"

export function OfferSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Urgency badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-6 py-3">
            <Clock className="h-5 w-5 text-red-400" />
            <span className="text-lg font-semibold text-red-300">Oferta por Tiempo Limitado</span>
          </div>
        </div>

        <Card className="relative overflow-hidden border-orange-500/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-amber-600/10 blur-3xl" />

          <div className="relative">
            {/* What's included */}
            <h3 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
              Acceso Completo al Curso Kike Arnaiz
            </h3>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <CheckCircle className="h-8 w-8 text-orange-400" />
                <h4 className="font-semibold text-white">Fotografía Profesional</h4>
                <p className="text-sm text-zinc-400">Desde cero hasta pro</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <CheckCircle className="h-8 w-8 text-orange-400" />
                <h4 className="font-semibold text-white">Edición Completa</h4>
                <p className="text-sm text-zinc-400">Lightroom + Photoshop</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <CheckCircle className="h-8 w-8 text-orange-400" />
                <h4 className="font-semibold text-white">Venta en Stock</h4>
                <p className="text-sm text-zinc-400">Estrategias comprobadas</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8 text-center">
              <div className="mb-2 text-zinc-400">
                <span className="text-2xl line-through">Valor real: 350€</span>
              </div>
              <div className="mb-4">
                <span className="text-6xl font-bold text-white">$62</span>
                <span className="ml-2 text-2xl text-zinc-400">USD</span>
              </div>
              <p className="text-orange-400">
                <Zap className="mr-2 inline h-5 w-5" />
                Ahorra más del 80% - Solo hoy
              </p>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="group h-16 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-xl font-bold text-zinc-950 hover:from-orange-400 hover:to-amber-400"
            >
              <Zap className="mr-2 h-6 w-6" />
              VER LA OFERTA SECRETA Y EMPEZAR AHORA
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Acceso Inmediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Soporte incluido</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
