import React, { useState } from "react";
import { Box } from "../Box";
import { Input } from "../Input";
import { useGlobalContext } from "../context/context";

export const Background = (props) => {
 const {openModal} = useGlobalContext()

  return <div >
    <div className="background">
      <button className="Botao" onClick={openModal}>
        Nova Entrada
      </button>
      <div className="boxes">
        <div className="boxes-display">
          <Box Preco = {props.card.map(card => card.Preco)}/>
        </div>
      </div>
    </div>
    <div className="background-2">
      <div className="desk">
        <p className="desk-txt">Descrição</p>
        <p className="desk-txt">Valor</p>
        <p className="desk-txt">Data</p>
      </div>
      <div className="inputs" >
        {props.card.map(card => <Input
        Id={card.Id} 
        Descricao={card.Descricao}
        Preco = {card.Preco}
        Date = {card.Data}    
        />)}
      </div>
    </div>
  </div>

}