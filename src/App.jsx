import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Logo Section */}
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Info Card */}
      <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center">
        <p className="text-lg font-semibold text-blue-600">
          Saat ini saya sedang mencoba Tailwind 🚀
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.jsx</code> dan simpan untuk test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
