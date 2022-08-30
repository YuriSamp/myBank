import { useState } from 'react';
import { Sidebar } from './componentes/SideBar/sidebar';
import { Background } from './componentes/Background';
import Modal from './componentes/Modal';


function App() {
  
  const [cardInput, setCardInput] = useState([])

  const novoCardInput = (card) => {
    setCardInput([...cardInput, card])
  }

  return (
    <>
      <Background
       card={cardInput}/>
      <Modal
      Card={card => novoCardInput(card) }/>
      <Sidebar/>
    </>
  );
}

export default App;
