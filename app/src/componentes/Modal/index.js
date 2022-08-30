import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CampoTexto } from '../CampoTexto'
import { useGlobalContext } from '../context/context'
import './modal.css'

let Id = 0

const Modal = (props) => {
  const { isModalOpen, closeModal} = useGlobalContext();

  const[Preco, setPreco] = useState('')
  const[Descricao, setDescricao] = useState('')
  const[Data, setData] = useState('')

  const acao = (e) => {
    if(Preco === "" ||
    Descricao === ""||
    Data ===""){ 
      alert("É necessario preencher todos os campos")
    } else{
    parseFloat(Preco)
    e.preventDefault()
    props.Card({
      Id,
      Preco,
      Descricao,
      Data
    })
    Id++
    setDescricao('')
    setPreco('')
    setData('')
  }}

  const cancelar = () => {
    setDescricao('')
    setPreco('')
    setData('')
  }

  return (
    <div className={` ${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container'>
      <h3 className='form-titulo'>Nova Transação</h3>
        <form onSubmit={acao}>
      <div className='form-entrada'>

      <CampoTexto 
      obrigatorio = {true} 
      placeholder = "Descricao" 
      valor={Descricao}
      aoAlterado={valor => setDescricao(valor)} />
      <CampoTexto 
      obrigatorio = {true} 
      placeholder = "0,00" 
      valor={Preco}
      aoAlterado={valor => setPreco(valor)} />
      <label className='subtitulo'>use o sinal - (negativo) para despesas e , (virgula) para os centavos</label>
      <CampoTexto 
      obrigatorio = {true} 
      placeholder = "dd/mm/aaaa" 
      valor={Data}
      aoAlterado={valor => setData(valor)} />
      </div>
      <div className='botoes'>
        <button className='cancelar' onClick={cancelar}>Cancelar</button>
        <button className='Salvar' onClick={acao}>Salvar</button>
      </div>
      </form>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes/>
      </button>
    </div>
  </div>
  )
}

export default Modal