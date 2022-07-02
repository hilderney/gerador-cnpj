import React from 'react'
import './style/Generator.css'

const Generator: React.FC = () => {

  function generateDocument(): any {
    console.log('hi')
  }

  return (
    <div className='generator'>
      <div className="panel">
        <div className="col inputs">
          <input className='inputCnpj' type="text" />
          <button onClick={generateDocument()}> GerarCNPJ</button>
        </div>
        <div className="col info">
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Generator
