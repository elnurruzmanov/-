import React from 'react'
import "./Clients.css";

//icons
import Oriflame from "../../icons/orifl.png"
import Konsultant from "../../icons/konsultant.png"
import Shar from "../../icons/shar.png"
import UralBank from "../../icons/uralBank.png"
import EastBank from "../../icons/eastBank.png"
import Kvadrum from "../../icons/kvadrum.png"
import Skoda from "../../icons/skoda.png"
import Gold from "../../icons/gold.png"

const Clients = () => {
  return (
    <div className='clients'>
      <div className="container">
        <h4 className='clients-title'>Наши клиенты</h4>
        <ul className="clients-list">
          <li className="clients-item">
            <img src={Oriflame} alt="Oriflame" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={Konsultant} alt="Konsultant" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={Shar} alt="Shar" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={UralBank} alt="UralBank" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={EastBank} alt="EastBank" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={Kvadrum} alt="Kvadrum" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={Skoda} alt="Skoda" className='clients-image' />
          </li>
          <li className="clients-item">
            <img src={Gold} alt="Gold" className='clients-image' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Clients