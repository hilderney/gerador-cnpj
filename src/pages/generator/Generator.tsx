import React from 'react'
import GerarCnpj from '../../domain/cnpj/GerarCnpj';
import ValidarCnpj from '../../domain/cnpj/ValidarCnpj';
import './style/Generator.css'

const Generator: React.FC = () => {

  // Gerar Novo CNPJ
  // Validar CNPJ no Campo de Texto
  // Gerar CNPJs Filiais
  // Validar CNPJs de Filiais


  function generateDocument(): any {
    const cnpjGerado = GerarCnpj();
    console.log('Gerando CNPJ...', cnpjGerado);
    console.log('Validar CNPJ...', ValidarCnpj(cnpjGerado.toString()));

  }



  return (
    <div className='generator'>
      <div className="panel">
        <div className="col inputs">
          <input className='inputCnpj' type="text" />
          <button onClick={() => generateDocument()}> GerarCNPJ</button>
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
