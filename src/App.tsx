import './App.css'

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
const App = () => {

    // TODO: try-catch
    async function fetchDataFromAPI() {
        const data:Response = await fetch(`${BASE}people/1`)
        const jsonData:Person = await data.json()
        console.log(jsonData)
    }

    return (
    <>
        <h1>Star Wars REST API</h1>
        <button onClick={fetchDataFromAPI}>Fetch data from API</button>
    </>
  )
}

export default App