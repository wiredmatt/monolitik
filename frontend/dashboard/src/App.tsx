import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import DashboardLayout from './dashboard/layout'
import HomePage from './pages'
import ArchivesPage from './pages/admin/archives'
import CreditsPage from './pages/admin/credits'
import DocumentationPage from './pages/admin/documentation'
import SettingsPage from './pages/admin/settings'
import StatusPage from './pages/admin/status'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/admin/archives"
            element={<ArchivesPage />}
          />
          <Route
            path="/admin/credits"
            element={<CreditsPage />}
          />
          <Route
            path="/admin/documentation"
            element={<DocumentationPage />}
          />
          <Route
            path="/admin/settings"
            element={<SettingsPage />}
          />
          <Route path="/admin/status" element={<StatusPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
