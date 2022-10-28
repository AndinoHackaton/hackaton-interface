import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './views/Home'
import MainLayout from './layouts/main'
import { Login } from './views/Login'
import { GenerarQr } from './views/GenerarQr'
import { Pay } from './views/Pay'
import { Prueba } from './views/Prueba'

import './App.css'

function App() {
  return (
    <Fragment>
      <MainLayout>
        <Routes>
          <Route path="/" default exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/GenerarQr" exact element={<GenerarQr />} />
          <Route path="/pay" exact element={<Pay />} />
        </Routes>
      </MainLayout>
    </Fragment>
  )
}

export default App
