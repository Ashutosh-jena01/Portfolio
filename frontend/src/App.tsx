import { AppShell } from './components/layout/AppShell'
import { DesignSystemPreview } from './components/DesignSystemPreview'
import { PortfolioPage } from './components/pages/PortfolioPage'

function App() {
  const isDesignPreview = import.meta.env.DEV && new URLSearchParams(window.location.search).get('preview') === 'design-system'
  return <AppShell>{isDesignPreview ? <DesignSystemPreview /> : <PortfolioPage />}</AppShell>
}

export default App
