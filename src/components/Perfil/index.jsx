

import React from 'react'
import { Perfildiv } from './styles'
import desta from '../../assets/img-perfil/desta.png'
import desta1 from '../../assets/img-perfil/desta1.png'
import desta2 from '../../assets/img-perfil/desta2.png'
import perfil from '../../assets/img-perfil/perfil.png'

const Perfil = () => {
  return (
    <Perfildiv>
      <div className='capa'></div>

      <div className='container'>
        <div className='secao-perfil'>
          
          <img className="avatar" src={perfil} alt="perfil" />

          <div className='info'>
            <div className='linha-topo'>
              <h2 className='nome-usuario'>chocolate</h2>
              <button className='botao-seguir'>Follow</button>
            </div>

            <div className='estatisticas'>
              <span><strong>20</strong> posts</span>
              <span><strong>10k</strong> followers</span>
              <span><strong>2</strong> following</span>
            </div>

            <div className='bio'>
              <strong>Chocolate</strong> • he/him <br />
              Chonky and fatass, just sleep and eat 24/7 <br />
              Born in 18/10/2024
            </div>

            <div className='stories'>
              <div className='story'>
                <div className="story-border">
                  <img src={desta2} alt="" />
                </div>
                <p>About me</p>
              </div>

              <div className='story'>
                <div className="story-border">
                  <img src={desta1} alt="" />
                </div>
                <p>Baby me</p>
              </div>

              <div className='story'>
                <div className="story-border">
                  <img src={desta} alt="" />
                </div>
                <p>Vacations</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Perfildiv>
  )
}

export default Perfil