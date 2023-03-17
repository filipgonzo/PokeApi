import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Pokemones = () => {
    const [idPokemon, setIdPokemon] = useState("");
    const [listaPokemon, setListaPokemon] = useState([]);
    const navigate = useNavigate();

    const getPokemones = async () =>{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();

        let dataSelect = [];
        data.results.map((pokemon)=> {
            dataSelect.push({url:pokemon.url, nombre: pokemon.name});
        });
        console.log(dataSelect);
        setListaPokemon(dataSelect);
    }

    const verDetalle = () => {

        console.log('ver Detalle');
        let id = idPokemon.replace('https://pokeapi.co/api/v2/pokemon/','');
        id = id.replace('/','');
        navigate(`/pokemones/${id}`);


    }



    useEffect(()=>{
         getPokemones();
    },[])


  return (
    <div className='pokemones'>
        <h1>Selecciona tu personaje</h1>
        <select name="id" id= "id" onChange={(e)=> setIdPokemon(e.target.value)}>
            <option value =" ">Seleccione un pokemon</option>
            {
                listaPokemon.map((p) => <option key={p.url} value={p.url}>{p.nombre}</option>)
            }
        </select>
        <br></br>
        <Button variant="primary" onClick={(e)=> verDetalle()}> Ver Pokemón</Button>
    </div>
  )
}

export default Pokemones