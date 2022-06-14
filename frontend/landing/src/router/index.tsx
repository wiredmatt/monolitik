import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Styles } from '../styles/styles'
import routes from './config'

const Router = () => (
  <Suspense fallback={null}>
    <Styles />
    <Header />
    <Routes>
      {routes.map(routeItem => (
        <Route
          key={routeItem.path}
          path={routeItem.path}
          element={
            <Suspense fallback={<>...</>}>
              <routeItem.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
    <Footer />
  </Suspense>
)

export default Router
