type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-[100svh] overflow-x-clip bg-obsidian text-lunar-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-lunar-white focus:px-4 focus:py-3 focus:text-obsidian">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  )
}
import { Navbar } from '../navigation/Navbar'
