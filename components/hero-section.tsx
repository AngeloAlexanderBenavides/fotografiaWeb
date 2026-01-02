"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { YouTubeEmbed } from "@next/third-parties/google"

interface HeroSectionProps {
  onStart: () => void
}

export function HeroSection({ onStart }: HeroSectionProps) {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    // El botón aparecerá 10 segundos después para "retener" la atención en el video primero
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="step-landing" className="flex flex-col items-center text-center relative py-8 md:py-20 overflow-hidden">

      {/* Glow detrás del título */}
      <div className="glow-spot opacity-50 md:opacity-100"></div>

      {/* Badge Superior */}
      <div className="fade-in delay-0 mb-6 md:mb-8 relative z-10">
        <span className="bg-[#1c1c1e]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase flex items-center gap-2 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          Kike Arnaiz Partner
        </span>
      </div>

      {/* Título Principal */}
      <h1 className="fade-in delay-100 text-[3.5rem] md:text-8xl font-bold tracking-tight mb-4 md:mb-6 leading-[0.9] drop-shadow-2xl relative z-10">
        Pro. <br />
        <span className="text-pro-gradient">En todos los sentidos.</span>
      </h1>

      <p className="fade-in delay-200 text-sm md:text-xl text-gray-300 max-w-[90%] md:max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed px-4 relative z-10">
        Descubre si tu ojo fotográfico tiene calidad comercial. <br className="hidden md:block" />
        El mercado ha cambiado. Tu portafolio debería hacerlo también.
      </p>

      {/* VIDEO SALES LETTER (VSL) - AHORA MÁS GRANDE Y LLAMATIVO */}
      <div className="fade-in delay-300 w-full max-w-6xl mx-auto text-center mb-12 md:mb-16 relative z-10 px-4">
        <span className="text-orange-500 text-[10px] md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4 block animate-pulse">Entrenamiento Exclusivo</span>
        <h2 className="text-2xl md:text-5xl font-semibold mb-6 md:mb-10 leading-tight">
          Cómo convertir tus fotos en <br className="md:hidden" /> <span className="text-titanium">Ingresos Pasivos</span>
        </h2>

        {/* Contenedor del Video con Efecto Glow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black [&>div]:w-full [&>div]:h-full">
            <YouTubeEmbed videoid="TSG8-YVlsCg" params="controls=1&rel=0&modestbranding=1" style="width: 100%; height: 100%;" />
          </div>
        </div>
      </div>

      {/* Botón CTA + Link (Aparición Retardada) */}
      <div className={`flex flex-col items-center gap-6 transition-all duration-1000 ease-out transform ${showCTA ? 'opacity-100 translate-y-0 max-h-[200px] mb-20' : 'opacity-0 translate-y-10 max-h-0 mb-0 overflow-hidden'}`}>
        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg hover:from-orange-500 hover:to-amber-400 focus:outline-none focus:ring-4 focus:ring-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] mx-auto active:scale-95"
        >
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 group-hover:ring-white/40"></div>

            <span className="mr-3 text-2xl">⚡</span>
            <span className="text-lg tracking-wide uppercase text-shadow">Quiero Verificarme</span>
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </button>

      </div>

      {/* NUEVO BLOQUE DEBAJO DEL BOTÓN (Minimalista & Clean) */}
      <div className="mt-10 flex flex-col items-center w-full max-w-lg mx-auto fade-in delay-300">

          {/* 1. SOCIAL PROOF (Limpio, sin caja negra) */}
          <div className="flex items-center gap-4 mb-8 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              {/* Avatares superpuestos (Look Premium) */}
              <div className="flex -space-x-3">
                  <Image className="rounded-full border-[2px] border-black object-cover" src="https://i.pravatar.cc/100?img=33" alt="" width={36} height={36} />
                  <Image className="rounded-full border-[2px] border-black object-cover" src="https://i.pravatar.cc/100?img=47" alt="" width={36} height={36} />
                  <Image className="rounded-full border-[2px] border-black object-cover" src="https://i.pravatar.cc/100?img=12" alt="" width={36} height={36} />
              </div>

              {/* Texto Explicativo */}
              <div className="text-left">
                  <div className="flex items-center gap-1.5">
                      <span className="text-white font-bold text-sm">2,400+</span>
                      <span className="flex text-orange-500 text-[10px]">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide">Fotógrafos ya verificados</p>
              </div>
          </div>

          {/* 2. BARRA DE CARACTERÍSTICAS (Sustituye a las 4 cajas grandes) */}
          {/* Diseño: Iconos flotantes con separadores verticales sutiles */}
          <div className="w-full border-t border-white/10 pt-6">
              <div className="flex justify-between items-start px-2 md:px-6">

                  {/* Item 1 */}
                  <div className="flex flex-col items-center gap-2 group cursor-help">
                      <div className="p-2 rounded-full bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Rápido</span>
                  </div>

                  {/* Separador Vertical */}
                  <div className="w-px h-8 bg-white/5 mt-1"></div>

                  {/* Item 2 */}
                  <div className="flex flex-col items-center gap-2 group cursor-help">
                      <div className="p-2 rounded-full bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Privado</span>
                  </div>

                  {/* Separador Vertical */}
                  <div className="w-px h-8 bg-white/5 mt-1"></div>

                  {/* Item 3 */}
                  <div className="flex flex-col items-center gap-2 group cursor-help">
                      <div className="p-2 rounded-full bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Preciso</span>
                  </div>

                  {/* Separador Vertical */}
                  <div className="w-px h-8 bg-white/5 mt-1"></div>

                  {/* Item 4 */}
                  <div className="flex flex-col items-center gap-2 group cursor-help">
                      <div className="p-2 rounded-full bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path></svg>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Global</span>
                  </div>

              </div>
          </div>
      </div>
    </section>
  )
}
