import React from 'react'
import IFormCnpj from '../../interfaces/IFormCnpj.interface'

const GerarFiliais: any = (form: IFormCnpj) => {

  if (form.quantidadeFiliais <= 0)
    return

  debugger;
  //const cnpjRoot =

  console.log(`Preparar para gerar ${form.quantidadeFiliais} filiais`)
}

export default GerarFiliais
