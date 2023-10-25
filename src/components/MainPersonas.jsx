import { useState, useEffect } from "react";
import CardPersonas from "./CardPersonas";
const API='https://api.themoviedb.org/3/person/popular?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';  
    const Mainpersonas = () => {
        const [personas, setPersonas] = useState([])
          const getPersonas = async () =>{
          try {
                  const response = await fetch(API);
                  const data = await response.json();
                  console.log(data)
                  setPersonas(data.results);
              } catch (error) {
                  console.error(error)
              }
              };
          useEffect(()=>{
                  getPersonas();
          },[]);
        return (
          <div className="bg-pag-personas">
            <div className="container py-4">
              <h3 className="text-center py-3 text-white">Personas Populares</h3>
              <div className="row">
                {personas && personas.map((persona) => (
                  <CardPersonas persona={persona} key={persona.id}/>
                  ))} 
              </div>
            </div>
          </div>
        )
      }
export default Mainpersonas