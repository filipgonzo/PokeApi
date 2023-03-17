import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DetallesPokemon = () => {

    const [personaje, setPersonaje] = useState ({});
    const [cargando, setCargando] = useState(true);

    const {id} = useParams();

    const getPokemones = async () =>{
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      setPersonaje(data);
      setCargando(false);
    }
    
    useEffect(() => {
      getPokemones();
    },[]);
    

  return (
    cargando?
    <h1>Cargando datos...</h1> :
        <div className="detalleView">
          <div >
              <img src={personaje.sprites.other.dream_world.front_default} alt="personaje" />
          </div>
          <div className="detallePersonaje">
            <h2>
             {personaje.name}
            </h2>
            <ul>
              <li>
                hp: {personaje.stats[0].base_stat  }
              </li>
              <li>
                attack: {personaje.stats[1].base_stat  }
              </li>
              <li>
                defense: {personaje.stats[2].base_stat  }
              </li>
              <li>
                special-attack: {personaje.stats[3].base_stat  }
              </li>
              <li>
                special-defense: {personaje.stats[4].base_stat  }
              </li>
              <li>
                speed: {personaje.stats[5].base_stat  }
              </li>
            </ul>
            {personaje.types[0].type.name  }
          </div>
        </div>
    
  )
}

export default DetallesPokemon