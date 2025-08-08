import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-xl bg-slate-900/60 backdrop-blur">
        <h1 className="text-3xl font-bold">Superszybka strona na React</h1>
        <p className="mt-2 opacity-80">Vite + TypeScript + Tailwind</p>
        <div className="mt-6 flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            onClick={() => setCount((c) => c + 1)}
          >
            Kliknięcia: {count}
          </button>
          <a
            className="underline opacity-80 hover:opacity-100"
            href="https://vitejs.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Vite docs
          </a>
        </div>
      </div>
    </div>
  )
}
