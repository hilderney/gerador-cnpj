import React from 'react'
import './App.css'

import AppHeader from './components/Header/Header'
import AppMainContent from './components/MainContent/MainContent'
import AppFooter from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <AppHeader></AppHeader>
      <AppMainContent></AppMainContent>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App;
