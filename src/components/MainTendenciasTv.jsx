import { useState, useEffect } from "react";
import Card from "./Card";
const APITelevision='https://api.themoviedb.org/3/trending/tv/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

const MainTendenciasTv = () => {
    const [tendenciaTv, setTendenciaTv] = useState([])
    const getTendenciaTv = async () =>{
    try {
            const response = await fetch(APITelevision);
            const data = await response.json();
            setTendenciaTv(data.results);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(()=>{
            getTendenciaTv();
    },[]);
    return (
        <div className="bg-pag-tv">
          <div className="container py-4">
            <h3 className="text-center py-3 text-white">Programas de televisión populares</h3>
            <div className="row">
              {tendenciaTv && tendenciaTv.map((pelicula) => (
                <Card pelicula={pelicula} key={pelicula.id}/>
                ))} 
            </div>
          </div>
        </div>
      )
    }

export default MainTendenciasTv