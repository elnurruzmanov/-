import React from 'react'
import "./Team.css"

import teamSheila from "../../images/teamSheila.png"
import teamHeather from "../../images/teamHeather.png"
import teamBrittany from "../../images/teamBrittany.png"

const Team = () => {
  return (
    <div className='team'>
      <div className="container">
        <h3 className="team-title">Наша команда</h3>
        <ul className="team-list">
          <li className="team-item">
            <img src={teamSheila} alt="teamSheila" className="team-image" />
            <p className="team-name">Sheila Shelton</p>
            <p className="team-job">Должность</p>
          </li>
          <li className="team-item">
            <img src={teamHeather} alt="teamHeather" className="team-image" />
            <p className="team-name">Heather Hoffman</p>
            <p className="team-job">Должность</p>
          </li>
          <li className="team-item">
            <img src={teamBrittany} alt="teamBrittany" className="team-image" />
            <p className="team-name">Brittany Fuller</p>
            <p className="team-job">Должность</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Team