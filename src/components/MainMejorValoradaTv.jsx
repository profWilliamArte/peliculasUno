import { useState, useEffect } from "react";
import Card from "./Card";
const APIMCTMDBElTv='https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  

const MainMejorValoradaTv = () => {
const [mejorValoradaTv, setMejorValoradaTv] = useState([])
const getMejorValoradaTv = async () =>{
try {
		const response = await fetch(APIMCTMDBElTv);
		const data = await response.json();
		setMejorValoradaTv(data.results);
	} catch (error) {
		console.error(error)
	}
};
useEffect(()=>{
		getMejorValoradaTv();
},[]);
return (
    <div className="bg-pag-tv">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Programas de televisión mejor valorados</h3>
        <div className="row">
          {mejorValoradaTv && mejorValoradaTv.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>
      </div>
    </div>
  )
}

export default MainMejorValoradaTv