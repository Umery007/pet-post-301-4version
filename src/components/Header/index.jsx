import React from 'react'
import { Headerdiv } from './styles'
import Lupa from '../../assets/icons-header/Lupa.png'
const Header = () => {
  return (
    <Headerdiv>
        <header className='container'>
            <h1 className='logo'>RandomName</h1>

            <div className='search'>
                
                <img src={ Lupa } alt="" />
                <input type="Pesquisar..."placeholder='Pesquisar...'  />
            </div>
             
            <div className='buttons-header'>
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </header>
    </Headerdiv>
  )
}

export default Header
