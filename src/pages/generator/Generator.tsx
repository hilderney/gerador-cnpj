import React, { useEffect, useState } from 'react'
import GerarCnpj from '../../domain/cnpj/GerarCnpj';
import GerarFiliais from '../../domain/cnpj/GerarFiliais';
import ValidarCnpj from '../../domain/cnpj/ValidarCnpj';
import './style/Generator.css'

const initialData: IFormCnpj = {
  cnpj: '',
  quantidadeFiliais: 0
}

const initialMessage: IMessage = {
  content: '',
  type: 'info'
}

// ( ) Gerar CNPJs Filiais
// ( ) Validar CNPJs de Filiais
// ( ) Arrumar Textos
// ( ) Dar Aquele tapa no visual

const Generator: React.FC = () => {

  const [form, setForm] = useState<IFormCnpj>(initialData);
  const [message, setMessage] = useState<IMessage>(initialMessage);

  function onChange(ev: any) {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value })
  }

  function generateDocument(): any {
    setForm({ ...form, cnpj: GerarCnpj() })
    if (form.quantidadeFiliais > 0)
      generateSubsidiarys();
  }

  function generateSubsidiarys(): void {
    GerarFiliais(form.quantidadeFiliais)
  }

  useEffect(() => {
    console.log(`Alterou o CNPJ`)
    if (form.cnpj.length <= 14)
      return
    if (ValidarCnpj(form.cnpj))
      setMessage({ content: '', type: 'info' });
    else
      setMessage({ content: 'CNPJ inválido', type: 'error' });

  }, [form.cnpj])

  useEffect(() => {
    console.log(`Alterou a Quantidade de Filiais`)
    if (form.quantidadeFiliais < 0)
      setForm({ ...form, quantidadeFiliais: 0 })

    GerarFiliais(form.quantidadeFiliais)

  }, [form.quantidadeFiliais])

  return (
    <div className='generator'>
      <div className="panel">

        <div className="col">
          <div className="form-group">
            <div className="labels">
              <label htmlFor=""> CNPJ </label>
              <label htmlFor="" className={`message ${message.type}`}>
                {message.content}
              </label>
            </div>
            <div className="input-group">
              <input
                name='cnpj'
                className='input-cnpj'
                type="text"
                onChange={onChange}
                value={form.cnpj}
              />
              <button
                onClick={() => generateDocument()}
              >
                Gerar
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="labels">
              <label htmlFor=""> Quantidade de Filiais </label>
            </div>
            <input
              name='quantidadeFiliais'
              className='quantidade-filial' type="number"
              onChange={onChange}
              value={form.quantidadeFiliais}
            />
          </div>
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

interface IFormCnpj {
  cnpj: string,
  quantidadeFiliais: number
}

interface IMessage {
  content: string,
  type: 'error' | 'info'
}
