import React from "react";
import { AiFillBank } from "react-icons/ai";
import { links, social } from "../../data";
import { CgProfile } from "react-icons/cg";


export const Sidebar = () => {


  return <div className="sidebar" >
  <div className="Sidebar-header">
    <AiFillBank/>
    <h1 className="titulo">myBank</h1>
  </div>
  <ul className="links" >
    {links.map((link) => {
      const { id, text, icon } = link;
      return <li key={id}>
        <a>
          {icon}
          {text}
        </a>
      </li> 
    })}
  </ul>
  <div className="UserDisplay">
  <div className="User">
      <CgProfile/>   
  </div>
  <div className="Userame"> 
   <p>Yuri Santos</p>
  </div>
  </div>
  <ul className="social-icons">
    {social.map((link) => {
      const {id, icon ,url} = link;
      return <li key={id}>
        <a href={url} target="_blank">{icon}</a>
      </li>
    })}
  </ul>
  </div>
} 