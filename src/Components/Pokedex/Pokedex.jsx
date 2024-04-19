// import React from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList'
function Pokedex() {
  return (
    <div className='pokedex-heading'>
      {/* <h1 id='pokedex-heading'>Pokedex</h1> */}
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex
