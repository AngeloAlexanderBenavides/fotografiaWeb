"use client"

import { useState } from "react"
import type { QuizAnswers } from "@/app/page"

interface QuizSectionProps {
  onComplete: (answers: QuizAnswers) => void
}

const questions = [
  {
    id: "equipment",
    question: "¿Qué equipo usas?",
    options: [
      { value: "phone", label: "Solo Smartphone" },
      { value: "basic", label: "Cámara Reflex/Mirrorless" },
      { value: "pro", label: "Equipo Profesional" },
    ],
  },
  {
    id: "manualMode",
    question: "¿Sabes editar en RAW?",
    options: [
      { value: "no", label: "¿Qué es RAW?" },
      { value: "learning", label: "Sí, uso Lightroom" },
      { value: "yes", label: "Soy experto en edición" },
    ],
  },
  {
    id: "objective",
    question: "¿Cuál es tu meta?",
    options: [
      { value: "extra", label: "Ganar un extra" },
      { value: "full", label: "Vivir de la fotografía" },
      { value: "agency", label: "Viajar por el mundo" },
    ],
  },
]

export function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({
    equipment: "",
    manualMode: "",
    objective: "",
  })

  const handleOptionSelect = (value: string) => {
    const currentQuestion = questions[currentQuestionIndex]
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <section id="step-quiz" className="max-w-lg mx-auto py-20 relative fade-in">
      <div className="glass-bento p-8 md:p-12 relative overflow-hidden">
        {/* Barra Progreso */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
          <div
            id="progress-bar"
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4 block">
          Pregunta <span id="q-idx">{currentQuestionIndex + 1}</span>/{questions.length}
        </span>
        <h2 id="q-title" className="text-3xl font-bold mb-8 leading-tight">
          {currentQuestion.question}
        </h2>

        <div id="options-container" className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/50 hover:text-orange-400 transition-all text-gray-300 font-medium group flex justify-between"
            >
              <span>{option.label}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
