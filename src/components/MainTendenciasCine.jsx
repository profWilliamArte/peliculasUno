import { useState, useEffect } from "react";
import Card from "./Card";
const APITendencias='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //tendencias

const MainTendenciasCine = () => {
    const [tendenciaCine, setTendenciaCine] = useState([])
    const getTendenciaCine = async () =>{
    try {
            const response = await fetch(APITendencias);
            const data = await response.json();
            setTendenciaCine(data.results);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(()=>{
            getTendenciaCine();
    },[]);
    return (
        <div className="bg-pag-peliculas">
          <div className="container py-4">
            <h3 className="text-center py-3 text-white">Peliculas que son Tendencias en el Cine</h3>
            <div className="row">
              {tendenciaCine && tendenciaCine.map((pelicula) => (
                <Card pelicula={pelicula} key={pelicula.id}/>
                ))} 
            </div>
          </div>
        </div>
      )
    }

export default MainTendenciasCine