export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© 2025 Quiz Kike Arnaiz. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
