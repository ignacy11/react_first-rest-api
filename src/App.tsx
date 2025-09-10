import './App.css'
import Card from "./Card.tsx";
import {useEffect, useState} from "react";

const BASE = "https://swapi.info/api/"

type Person = {
    name: string,
    height: string,
    mass: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    starships: string[],
    vehicles: string[],
    films: string[],
    url: string
}
type Vehicle = {
    name: string,
    model: string,
    passengers: string,
    url: string,
}

const App = () => {

    /*try {
        async function fetchPeopleFromAPI() {
            const data:Response = await fetch(`${BASE}people/1`)
            const jsonData:Person = await data.json()
            console.log(jsonData)
        }
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message)
        } else {
            console.error("unknown error")
        }
    }*/

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const fetchPeopleFromAPI = () => {
        fetch(`${BASE}/people/1`)
            .then((response: Response) => response.json())
            .then((data: Person) => console.log(data))
            .catch(error => console.log(error.message))
    }

    const getAllVehicles = () => {
        fetch(`${BASE}/vehicles`)
            .then(data => data.json())
            .then(jsonData => setVehicles(jsonData))
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        getAllVehicles()
    }, []);

    return (
        <>
            <h1>Star Wars REST API</h1>
            <button onClick={fetchPeopleFromAPI}>Fetch data from API</button>
            <section style = { {display: "grid", gap: "10px"} }>
                {
                vehicles.map(vehicle => (
                    <Card key={vehicle.url}
                          name={vehicle.name}
                          model={vehicle.model}
                          passengers={vehicle.passengers}
                          />)
                    )
                }
            </section>
        </>
  )
}

export default App