import React from 'react'
import Header from '../../components/Header'
import { Homediv } from './styles'
import Perfil from '../../components/Perfil'
import Cards from '../../components/Cards'



const Home = () => {
  return ( 
    <Homediv>
      <Header />
      <Perfil />
      <Cards />
    </Homediv>
  )
}

export default Home
