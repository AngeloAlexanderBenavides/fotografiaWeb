"use client"

import { useState, useEffect } from "react"
import type { QuizAnswers } from "@/app/page"
import Image from "next/image"
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts"
import { X, TrendingUp } from "lucide-react"

interface ResultsSectionProps {
  answers: QuizAnswers
}

const projectionData = [
  { name: "Hoy", value: 0 },
  { name: "Mes 3", value: 150 },
  { name: "Mes 6", value: 450 },
  { name: "Mes 9", value: 1100 },
  { name: "Año 1", value: 2000 },
]

export function ResultsSection({ answers }: ResultsSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = 2000 / steps
    const interval = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= 2000) {
        setCounter(2000)
        clearInterval(timer)
      } else {
        setCounter(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="step-result" className="w-full max-w-5xl mx-auto py-20 px-6 space-y-16">

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full size"
              fill
              className="object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* 1. MARCAS (AUTORIDAD) - LOGOS PODEROSOS Y RESPONSIVE */}
      <div className="fade-up delay-100 w-full flex flex-col items-center gap-6 md:gap-8">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest text-center">Marcas que han licenciado mis fotos</p>

        <div className="w-full grid grid-cols-2 md:flex md:flex-wrap justify-items-center items-center gap-y-6 gap-x-4 md:gap-12 px-4 max-w-3xl mx-auto">

          {/* National Geographic */}
          <div className="flex items-center gap-2 group cursor-default transition-transform hover:scale-110 scale-90 md:scale-100">
            <div className="w-5 h-7 md:w-8 md:h-10 border-[3px] md:border-4 border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.3)]"></div>
            <span className="text-[10px] md:text-sm font-serif font-bold text-white leading-none tracking-wide text-left">NATIONAL<br/>GEOGRAPHIC</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-0.5 text-lg md:text-3xl font-bold tracking-tighter group cursor-default transition-transform hover:scale-110 bg-white/5 px-3 py-1 rounded-lg backdrop-blur-sm scale-90 md:scale-100">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          {/* Samsung */}
          <div className="relative group cursor-default transition-transform hover:scale-110 scale-90 md:scale-100">
            <div className="absolute inset-0 bg-[#034EA2] rounded-[50%] rotate-[-10deg] scale-110 opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 text-base md:text-2xl font-bold text-white px-3 font-sans tracking-wide">SAMSUNG</span>
          </div>

          {/* Sony */}
          <span className="text-xl md:text-4xl font-serif font-bold text-white tracking-widest cursor-default transition-transform hover:scale-110 drop-shadow-lg scale-90 md:scale-100">SONY</span>

          {/* Forbes */}
          <span className="text-xl md:text-4xl font-serif font-bold text-white cursor-default transition-transform hover:scale-110 scale-90 md:scale-100">Forbes</span>

          {/* El Pais */}
          <span className="text-lg md:text-2xl font-serif font-bold text-white uppercase border-b-2 border-[#006699] pb-1 cursor-default transition-transform hover:scale-110 scale-90 md:scale-100">EL PAÍS</span>

          {/* Lonely Planet */}
          <div className="col-span-2 md:col-span-1 flex items-center gap-2 group cursor-default transition-transform hover:scale-110 scale-90 md:scale-100">
             <div className="w-3 h-3 md:w-4 md:h-4 bg-[#0057D9] rounded-full shadow-[0_0_10px_#0057D9]"></div>
             <span className="text-base md:text-2xl font-bold text-[#0057D9] tracking-tight">lonely planet</span>
          </div>

        </div>
      </div>

      {/* 2. EL DIAGNÓSTICO (Visual) */}
      <div className="fade-up text-center">
        <h2 className="text-3xl font-semibold mt-2">
          Tu Resultado: <span className="text-titanium">Potencial Oculto</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Tu equipo es suficiente. Tu "Ojo Fotográfico" es bueno. Lo único que te separa de ingresos mensuales es
          conocer el algoritmo de las agencias.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 fade-up delay-100">

        {/* A. PERFIL DEL MENTOR (Kike Arnaiz) - ACTUALIZADO CON GALERÍA */}
        <div className="md:col-span-8 bento-card p-0 relative group flex flex-col md:flex-row overflow-hidden">
          {/* Galería Mentor (Slider simple CSS) */}
          <div className="w-full md:w-1/2 h-56 md:h-full relative overflow-hidden">
             <div className="absolute inset-0 flex animate-slider">
                <div className="relative w-full h-full flex-shrink-0">
                  <Image src="/kike1.JPG" alt="Kike 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
                </div>
                <div className="relative w-full h-full flex-shrink-0">
                  <Image src="/kike2.jpg" alt="Kike 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative w-full h-full flex-shrink-0">
                  <Image src="/kike3.JPG" alt="Kike 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative w-full h-full flex-shrink-0">
                  <Image src="/kike1.JPG" alt="Kike 1 Loop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
             </div>
             <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/10 z-10">
              📍 Kike Arnaiz - Instructor
            </div>
          </div>

          {/* Bio & Credibilidad */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center bg-[#1c1c1e]">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-sm font-bold text-white">Kike Arnaiz</span>
              <span className="text-blue-500 text-[10px] bg-blue-500/10 px-2 py-0.5 rounded-full">Verificado</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">"No necesitas ser un genio, necesitas un método."</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              He vendido más de <strong className="text-white">50,000 licencias</strong> de mis fotos online. Esto me ha
              permitido viajar por 30+ países viviendo solo de mi cámara. Ahora te enseño mi sistema exacto.
            </p>

            {/* Stats Rápidos */}
            <div className="grid grid-cols-3 gap-2 border-t border-gray-800 pt-4 md:pt-6">
              <div>
                <span className="block text-lg md:text-xl font-bold text-white">50k+</span>
                <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">Ventas</span>
              </div>
              <div>
                <span className="block text-lg md:text-xl font-bold text-white">100%</span>
                <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">Online</span>
              </div>
              <div>
                <span className="block text-lg md:text-xl font-bold text-white">4.9</span>
                <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">Valoración</span>
              </div>
            </div>
          </div>
        </div>

        {/* B. GRÁFICO DE GANANCIAS - MEJORADO */}
        <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-5 md:p-6 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500 flex flex-col justify-between">

          {/* 1. ENCABEZADO: CONTRASTE */}
          <div className="flex justify-between items-start mb-4 md:mb-6 relative z-10">
            {/* Estado Actual */}
            <div className="opacity-50 group-hover:opacity-40 transition-opacity">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Hoy</p>
              <h4 className="text-lg md:text-xl font-mono text-gray-400">$0</h4>
            </div>

            {/* Flecha */}
            <div className="mt-2 text-gray-600">
               <TrendingUp className="w-4 h-4" />
            </div>

            {/* Estado Futuro */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Tu Potencial</p>
              </div>
              <div className="flex items-center justify-end gap-1 text-green-400">
                <span className="text-xs font-bold">+2,400%</span>
              </div>
            </div>
          </div>

          {/* 2. EL NÚMERO (Counter Animation) */}
          <div className="mb-1 relative z-10">
            <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Tu Ingreso Pasivo Potencial</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                ${counter.toLocaleString()}
              </span>
              <span className="text-base md:text-lg text-gray-500 font-medium">/mes</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-400 mt-2 mb-4">
              Proyección a 12 meses aplicando el <span className="text-white font-medium">Método Kike Arnaiz</span>.
            </p>
          </div>

          {/* 3. GRÁFICO CON CONTEXTO */}
          <div className="h-32 md:h-40 w-full mt-auto relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectionData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(20,20,20,0.9)', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#f97316' }}
                  formatter={(value: number) => [`$${value}`, 'Ingresos']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Marcadores de Tiempo Manuales */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[9px] font-bold text-gray-600 uppercase tracking-widest pointer-events-none">
              <span>Hoy</span>
              <span>Mes 6</span>
              <span className="text-orange-500">Año 1</span>
            </div>
          </div>

          {/* Fondo Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-orange-500/20 transition-colors"></div>
        </div>

        {/* C. GALERÍA COMERCIAL (MOSAICO GRID) - REEMPLAZA A LA ANTERIOR */}
        <div className="md:col-span-12 mt-8 mb-8">
            {/* TITULO DE SECCIÓN */}
            <div className="w-full mb-6 flex justify-between items-end px-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Galería Comercial</h2>
                    <p className="text-gray-400 text-sm mt-1">Fotos del portafolio de Kike Arnaiz.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
            </div>

            {/* EL MOSAICO GRID */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px] grid-flow-dense">

                {/* 1. FOTO VERTICAL (Alta) - Recurso 2 */}
                <div
                  className="row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso2.JPG")}
                >
                    <Image src="/recurso2.JPG" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Retrato" sizes="(max-width: 768px) 50vw, 25vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Retrato</span>
                        <div className="flex justify-between items-end">
                            <span className="text-white font-bold">Cámara en Mano</span>
                        </div>
                    </div>
                </div>

                {/* 2. FOTO GRANDE (2x2) - Recurso 1 */}
                <div
                  className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso1.jpg")}
                >
                    <Image src="/recurso1.jpg" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Paisaje" sizes="(max-width: 768px) 100vw, 50vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Paisaje</span>
                        <div className="flex justify-between items-end">
                            <span className="text-white font-bold">Alpes Suizos</span>
                        </div>
                    </div>
                </div>

                {/* 3. FOTO VERTICAL (Alta) - Recurso 6 */}
                <div
                  className="row-span-2 relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso6.jpg")}
                >
                    <Image src="/recurso6.jpg" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Editorial" sizes="(max-width: 768px) 50vw, 25vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Editorial</span>
                        <div className="flex justify-between items-end">
                            <span className="text-white font-bold">Minimalismo</span>
                        </div>
                    </div>
                </div>

                {/* 4. FOTO CUADRADA (Normal) - Recurso 3 */}
                <div
                  className="relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso3.jpg")}
                >
                    <Image src="/recurso3.jpg" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Texturas" sizes="(max-width: 768px) 50vw, 25vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-white font-bold text-sm">Texturas</span>
                    </div>
                </div>

                {/* 5. FOTO CUADRADA (Normal) - Recurso 4 */}
                <div
                  className="relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso4.jpg")}
                >
                    <Image src="/recurso4.jpg" fill className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Lifestyle" sizes="(max-width: 768px) 50vw, 25vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-white font-bold text-sm">Lifestyle</span>
                    </div>
                </div>

                {/* 6. FOTO PANORÁMICA (Ancha) - Recurso 5 */}
                <div
                  className="col-span-2 relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                  onClick={() => setSelectedImage("/recurso5.jpg")}
                >
                    <Image src="/recurso5.jpg" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-110" alt="Aventura" sizes="(max-width: 768px) 100vw, 50vw" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">Aventura</span>
                        <div className="flex justify-between items-end">
                            <span className="text-white font-bold">Senderismo Solo</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* D. LA OFERTA (CTA PRINCIPAL) - AHORA FULL WIDTH */}
        <div className="md:col-span-12 mt-8">
            {/* TARJETA DE OFERTA "CONVERSION MONSTER" */}
            <div className="relative w-full max-w-4xl mx-auto group">

                {/* 1. GLOW DE FONDO (Atrae la mirada) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-1000 animate-pulse"></div>

                {/* 2. CONTENEDOR PRINCIPAL */}
                <div className="relative bg-[#0F0F10] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">

                    {/* Badge Superior (Móvil y Desktop) */}
                    <div className="bg-orange-500/10 border-b border-orange-500/20 py-2 px-4 md:px-6 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Oferta Flash</span>
                        </div>
                        {/* Contador Regresivo Simulado */}
                        <div className="text-xs font-mono text-orange-300 tabular-nums">
                            04:59:12
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* COLUMNA IZQUIERDA: EL VALOR (Stack) */}
                        <div className="p-5 md:p-10 border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                            {/* Fondo sutil de textura */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                            <div className="relative z-10">
                                <span className="bg-orange-500 text-black text-[10px] font-black px-2 py-0.5 rounded mb-2 inline-block uppercase tracking-wider">Bundle 2025</span>

                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                    Pack Fotógrafo <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Profesional</span>
                                </h2>
                                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-8">Todo lo que necesitas para dejar de ser amateur hoy mismo.</p>

                                {/* LISTA DE VALOR (Checklist con Precios) */}
                                <div className="space-y-2 md:space-y-3">
                                    <div className="flex justify-between items-center p-2 md:p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="bg-orange-500/20 p-1 rounded-full text-orange-500">
                                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-xs md:text-sm font-medium text-gray-200">Curso Iniciación Completo</span>
                                        </div>
                                        <span className="text-[10px] md:text-xs text-gray-500 line-through">$197</span>
                                    </div>

                                    <div className="flex justify-between items-center p-2 md:p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="bg-orange-500/20 p-1 rounded-full text-orange-500">
                                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-xs md:text-sm font-medium text-gray-200">Pack Presets Lightroom</span>
                                        </div>
                                        <span className="text-[10px] md:text-xs text-gray-500 line-through">$47</span>
                                    </div>

                                    <div className="flex justify-between items-center p-2 md:p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="bg-orange-500/20 p-1 rounded-full text-orange-500">
                                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-xs md:text-sm font-medium text-gray-200">Guía de Agencias Stock</span>
                                        </div>
                                        <span className="text-[10px] md:text-xs text-gray-500 line-through">$27</span>
                                    </div>
                                </div>

                                {/* Valor Total */}
                                <div className="mt-3 md:mt-4 text-right text-[10px] md:text-xs text-gray-500">
                                    Valor Total Real: <span className="line-through decoration-red-500 decoration-2 text-gray-400">$271 USD</span>
                                </div>
                            </div>
                        </div>

                        {/* COLUMNA DERECHA: EL PRECIO Y CTA */}
                        <div className="p-6 md:p-10 flex flex-col justify-center items-center bg-[#131314]">

                            <div className="text-center mb-4 md:mb-6">
                                <p className="text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-2">Precio Único Hoy</p>
                                <div className="flex items-baseline justify-center gap-2 md:gap-3">
                                    <span className="text-xl md:text-2xl text-gray-500 line-through font-medium">$120</span>
                                    <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-lg">$62</span>
                                </div>
                                <div className="mt-2 bg-green-500/10 text-green-400 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full inline-block border border-green-500/20">
                                    Ahorras 80% OFF
                                </div>
                            </div>

                            {/* BOTÓN PRINCIPAL */}
                            <a
                                href="https://go.hotmart.com/B103598178K?ap=9d5e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white hover:bg-gray-100 text-black font-bold text-base md:text-lg py-4 md:py-5 rounded-xl text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2 md:gap-3 group/btn"
                            >
                                <span>Desbloquear Acceso Ahora</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>

                            {/* Garantía y Pagos */}
                            <div className="mt-4 md:mt-6 flex flex-col items-center gap-2 md:gap-3 opacity-60">
                                <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-gray-400">
                                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Garantía de 15 días
                                </div>

                                {/* Iconos de Tarjetas (SVGs simplificados) */}
                                <div className="flex gap-2 grayscale hover:grayscale-0 transition-all opacity-70 scale-90 md:scale-100">
                                    {/* Visa */}
                                    <svg className="h-5 md:h-6 w-auto" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="2" fill="#1A1F71"/><path d="M12.5 15H10.5L11.5 5H13.5L12.5 15Z" fill="white"/><path d="M20 5H18L17 11.5L16 5H14L16 15H18L20 5Z" fill="white"/><path d="M23 15L24 5H22L21 10L20 5H18.5L20.5 15H23Z" fill="white"/></svg>
                                    {/* Mastercard */}
                                    <svg className="h-5 md:h-6 w-auto" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="2" fill="#222"/><circle cx="12" cy="10" r="6" fill="#EB001B"/><circle cx="20" cy="10" r="6" fill="#F79E1B" fillOpacity="0.9"/></svg>
                                    {/* PayPal */}
                                    <svg className="h-5 md:h-6 w-auto" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="2" fill="#003087"/><path d="M10 5H15C18 5 19 7 18 10C17.5 12 16 13 14 13H12L11 16H9L11 5Z" fill="white"/></svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* PRUEBA SOCIAL (Testimonios) */}
      <div className="mt-16 text-center fade-up delay-200">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Lo que dicen los alumnos</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="bento-card p-4 bg-[#111]">
            <p className="text-xs text-gray-300 mb-3">
              "Hice mi primera venta de $50 USD a la semana de empezar. El curso se paga solo."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500">Carlos M.</span>
            </div>
          </div>
          <div className="bento-card p-4 bg-[#111]">
            <p className="text-xs text-gray-300 mb-3">
              "Kike explica increíble. Pensé que necesitaba una cámara cara, pero empecé con mi iPhone."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500">Laura G.</span>
            </div>
          </div>
          <div className="bento-card p-4 bg-[#111]">
            <p className="text-xs text-gray-300 mb-3">
              "Llevo 3 meses y ya tengo un ingreso recurrente que paga mis facturas de luz."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs font-bold text-gray-500">David R.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
