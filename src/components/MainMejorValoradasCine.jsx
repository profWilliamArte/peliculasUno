import { useState, useEffect } from "react";
import Card from "./Card";
const APIMCTMDBEl='https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

const MainMejorValoradasCine = () => {
    const [mejorValoradasCine, setMejorValoradasCine] = useState([])
	const getMejorValoradasCine = async () =>{
	try {
				const response = await fetch(APIMCTMDBEl);
				const data = await response.json();
				setMejorValoradasCine(data.results);
			} catch (error) {
				console.error(error)
			}
		};
	useEffect(()=>{
			getMejorValoradasCine();
	},[]);
  
    return (
    <div className="bg-pag-peliculas">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Peliculas mejorValoradasCines</h3>
        <div className="row">
          {mejorValoradasCine && mejorValoradasCine.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}
export default MainMejorValoradasCine