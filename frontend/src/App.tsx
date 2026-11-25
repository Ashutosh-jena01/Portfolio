import { useEffect, useState } from 'react'
import { api } from './services/api'

type Status = 'checking' | 'connected' | 'failed'

function App() {
  const [backend, setBackend] = useState<Status>('checking')
  const [database, setDatabase] = useState<Status>('checking')

  useEffect(() => {
    let active = true

    api.getBackendHealth()
      .then((data) => {
        if (active) {
          setBackend(
            data.status === 'healthy' ? 'connected' : 'failed'
          )
        }
      })
      .catch(() => {
        if (active) setBackend('failed')
      })

    api.getDatabaseHealth()
      .then((data) => {
        if (active) {
          setDatabase(
            data.database === 'connected' ? 'connected' : 'failed'
          )
        }
      })
      .catch(() => {
        if (active) setDatabase('failed')
      })

    return () => {
      active = false
    }
  }, [])

  const services = [
    { name: 'React Frontend', status: 'connected' },
    { name: 'FastAPI Backend', status: backend },
    { name: 'PostgreSQL Database', status: database },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#08090B] text-white p-6">
      <div className="w-full max-w-lg">

        <p className="text-xs tracking-widest text-gray-400">
          PHASE 01 / SYSTEM INITIALIZATION
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Beyond the Cloud
        </h1>

        <p className="mt-2 text-lg text-blue-300">
          AI/ML Engineer Portfolio
        </p>

        <div className="mt-8 space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-lg border border-gray-800 bg-[#14161B] p-4"
            >
              <span>{service.name}</span>

              <span
                className={
                  service.status === 'connected'
                    ? 'text-green-400'
                    : service.status === 'failed'
                      ? 'text-red-400'
                      : 'text-yellow-400'
                }
              >
                {service.status}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-400">
          {backend === 'connected' && database === 'connected'
            ? 'All systems operational.'
            : backend === 'failed' || database === 'failed'
              ? 'System connectivity issue detected.'
              : 'Checking system connectivity...'}
        </p>

      </div>
    </main>
  )
}

export default App