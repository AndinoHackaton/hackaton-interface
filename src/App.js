import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './views/Home'
import MainLayout from './layouts/main'
import { Login } from './views/Login'
import { Pay } from './views/Pay'

function App() {
  return (
    <Fragment>
      <MainLayout>
        <Routes>
          <Route path="/login" default exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/pay" exact element={<Pay />} />
        </Routes>
      </MainLayout>
    </Fragment>
  )
}

export default App
