import {
  BrowserRouter as Router,
  Route,
  Switch
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
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/admin/archives">
            <ArchivesPage />
          </Route>
          <Route exact path="/admin/credits">
            <CreditsPage />
          </Route>
          <Route exact path="/admin/documentation">
            <DocumentationPage />
          </Route>
          <Route exact path="/admin/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/admin/status">
            <StatusPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  )
}

export default App
