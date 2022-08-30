import "../Modal/modal.css"

export const CampoTexto = (props) => {

  const aoDigitado =(e) => {
    props.aoAlterado(e.target.value)
  }

  return <>
    <input className='form' value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
  </>
}