import logo from '../../logo.svg'
import './Style/Header.css'

export function AppHeader() {
    return (
        <header> 
            <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="title">
                Gerador de CNPJ
            </div>
            <div className="navbar-wrapper">
                <a href="http://" target="_blank" rel="noopener noreferrer"> Link</a>
            </div>
        </header>
    )
}