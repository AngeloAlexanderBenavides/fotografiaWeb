"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { QuizSection } from "@/components/quiz-section"
import { EmailCapture } from "@/components/email-capture"
import { ResultsSection } from "@/components/results-section"
import { Footer } from "@/components/footer"
import { saveEmail } from "./actions"

export type QuizAnswers = {
  equipment: string
  manualMode: string
  objective: string
}

const progressStorageKey = "fotografiaWeb.quizProgress"

export default function Page() {
  const [step, setStep] = useState<"hero" | "quiz" | "email" | "results">("hero")
  const [answers, setAnswers] = useState<QuizAnswers>({
    equipment: "",
    manualMode: "",
    objective: "",
  })
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressStorageKey)

    if (!savedProgress) {
      setHasHydrated(true)
      return
    }

    try {
      const parsedProgress = JSON.parse(savedProgress) as {
        step?: "hero" | "quiz" | "email" | "results"
        answers?: QuizAnswers
      }

      if (parsedProgress.answers) {
        setAnswers(parsedProgress.answers)
      }

      if (parsedProgress.step) {
        setStep(parsedProgress.step)
      }
    } catch {
      window.localStorage.removeItem(progressStorageKey)
    }

    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (!hasHydrated) return

    window.localStorage.setItem(progressStorageKey, JSON.stringify({ step, answers }))
  }, [step, answers, hasHydrated])

  const startQuiz = () => {
    setStep("quiz")
  }

  const completeQuiz = (quizAnswers: QuizAnswers) => {
    setAnswers(quizAnswers)
    setStep("email") // Ahora vamos al email antes de los resultados
  }

  const completeEmail = async (email: string) => {
    // Enviamos el email al servidor (Server Action)
    await saveEmail(email)
    setStep("results")
  }

  const resetProgress = () => {
    window.localStorage.removeItem(progressStorageKey)
    setAnswers({
      equipment: "",
      manualMode: "",
      objective: "",
    })
    setStep("hero")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* FONDO VIVO */}
      <div className="cinematic-bg"></div>
      <div className="overlay-gradient"></div>

      {/* NAVEGACIÓN - ELIMINADA POR DUPLICIDAD EN HERO */}
      {/* <nav className="absolute top-6 left-0 w-full flex justify-center fade-in z-20">
        <div className="px-4 py-2 rounded-full glass-bento flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">Stockeros Partner</span>
        </div>
      </nav> */}

      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full max-w-5xl z-10 relative mt-10">
        {step === "hero" && <HeroSection onStart={startQuiz} />}
        {step === "quiz" && <QuizSection onComplete={completeQuiz} />}
        {step === "email" && <EmailCapture onComplete={completeEmail} />}
        {step === "results" && (
          <>
            <ResultsSection answers={answers} />
            <div className="-mt-6 mb-8 flex justify-center">
              <button
                onClick={resetProgress}
                className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
              >
                Reiniciar progreso
              </button>
            </div>
            <Footer />
          </>
        )}
      </main>
    </div>
  )
}
