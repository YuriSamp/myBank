import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

export const Box = (props) => {

  const Arr = props.Preco.map(str => {
    return (
      Number(str.replace(',', '.'))
    )
  })

  const Positive = Arr.map(str => {
    if (str > 0.0) {
      return str
    }
    else {
      return 0
    }
  })

  const Negative = Arr.map(str => {
    if (str < 0.0) {
      return str
    }
    else {
      return 0
    }
  })

  const sumPostive = Positive.reduce((a, b) => (a) + (b), 0).toFixed(2)
  const sumNegative = Negative.reduce((a, b) => (a) + (b), 0).toFixed(2)
  const sum = Arr.reduce((a, b) => (a) + (b), 0).toFixed(2)



  const arrow = [
    {
      id: 1,
      text: "Entradas",
      icon: <AiOutlineArrowUp />,
      background: "rgb(255,255,255)",
      valor: sumPostive
    },
    {
      id: 2,
      text: "Saidas",
      icon: <AiOutlineArrowDown />,
      background: "rgb(255,255,255)",
      valor: sumNegative
    },
    {
      id: 3,
      text: "Balanço",
      icon: <BiDollar />,
      background: "rgb(60, 255, 0)",
      valor: sum
    },
  ];

  return arrow.map((item) => {
    const { id, text, icon, background, valor } = item;
    
    return <div className="box" key={id} style={{ backgroundColor: background }}>
      <div className="box-top">
        <p className="box-h1">{text}</p>
        <div className="svg-1">
          {icon}
        </div>
      </div>
      <div>
        <p className="box-h2">{"R$ " + valor}</p>
      </div>
    </div>
  })
}
