import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import InfoPage from './pages/InfoPage/InfoPage'
import Navigation from './pages/Navigation/Navigation'

function App() {

  return (
    <Fragment>
      <Navigation />
      
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/novel' element={<InfoPage />} />
      </Routes>
    </Fragment>
  )
}

export default App