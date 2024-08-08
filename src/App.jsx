import React from 'react'
import Homepage from './screens/Homepage'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default App