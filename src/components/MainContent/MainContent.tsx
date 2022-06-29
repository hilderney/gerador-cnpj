import React from 'react'
import { AppRoutes } from "../../pages/Routes";

import './style/MainContent.css';
const AppMainContent: React.FC = () => {
  return (
    <div className="main-content">
      <AppRoutes></AppRoutes>
    </div>
  )
}

export default AppMainContent
