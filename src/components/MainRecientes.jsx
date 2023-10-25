import { useState, useEffect } from "react";
import Card from "./Card";

const APIRecientes='https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';   //reciente
                  
const MainRecientes = () => {
  const [reciente, setReciente] = useState([])
	const getreciente = async () =>{
	try {
				const response = await fetch(APIRecientes);
				const data = await response.json();
				setReciente(data.results);
			} catch (error) {
				console.error(error)
			}
		};
	useEffect(()=>{
			getreciente();
	},[]);
  return (
    <div className="bg-pag-peliculas">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Peliculas Recientes</h3>
        <div className="row">
          {reciente && reciente.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>

      </div>

    </div>
  )
}

export default MainRecientes