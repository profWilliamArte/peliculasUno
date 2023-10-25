import { useState, useEffect } from "react";
import Card from "./Card";
const APIHoy='https://api.themoviedb.org/3/tv/airing_today?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  




const MainSeEminenHoy = () => {
    const [seEmitenHoy, setSeEmitenHoy] = useState([])
	const getSeEmitenHoy = async () =>{
	try {
				const response = await fetch(APIHoy);
				const data = await response.json();
				setSeEmitenHoy(data.results);
			} catch (error) {
				console.error(error)
			}
		};
	useEffect(()=>{
			getSeEmitenHoy();
	},[]);
  return (
    <div className="bg-pag-tv">
      <div className="container py-4">
        <h3 className="text-center py-3 text-white">Programas de televisión que se emiten hoy</h3>
        <div className="row">
          {seEmitenHoy && seEmitenHoy.map((pelicula) => (
            <Card pelicula={pelicula} key={pelicula.id}/>
            ))} 
        </div>

      </div>

    </div>
  )
}

export default MainSeEminenHoy