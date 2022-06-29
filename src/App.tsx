import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { AppHeader } from './components/Header'
import { AppFooter } from './components/Footer'
import { AppMainContent } from './components/MainContent'

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
