import { useState, useEffect } from "react";
import Card from "./Card";

const APIProximamente='https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';   //proximamente

const MainProximamente = () => {
  const [proximamente, setProximamente] = useState([])
	const getProximamente = async () =>{
	try {
			const response = await fetch(APIProximamente);
			const data = await response.json();
			setProximamente(data.results);
		} catch (error) {
			console.error(error)
		}
		};
	useEffect(()=>{
			getProximamente();
	},[]);
  return (
    <div className="bg-pag-peliculas">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Peliculas que saldran Próximamente</h3>
        <div className="row">
          {proximamente && proximamente.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}

export default MainProximamente