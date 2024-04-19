import Pokedex from "../Components/Pokedex/Pokedex"
import {Routes, Route} from "react-router-dom";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails"

const CustomRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Pokedex/>} />
    <Route path="/pokemon/:id" element={<PokemonDetails/>} />
    </Routes>
  )
}

export default CustomRoutes
