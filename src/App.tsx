import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { AppHeader } from './components/Header/Header'
import { AppFooter } from './components/Footer/Footer'
import { AppMainContent } from './components/MainContent/MainContent'

function App() {

  return (
    <div className='app-wrapper'>
      <AppHeader></AppHeader>
      <AppMainContent></AppMainContent>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
