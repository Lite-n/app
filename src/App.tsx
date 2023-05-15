import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Navigation from './pages/Navigation/Navigation'

function App() {

  return (
    <Fragment>
      <Navigation />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Fragment>
  )
}

export default App