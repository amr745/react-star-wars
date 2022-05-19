import {useState, useEffect} from "react";
import "./App.css"

function App() {

  const [starship, setStarship] = useState([])

  const getStarship = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`)
    const data = await response.json()
    setStarship(data.results)
  }

  useEffect(() => {
    getStarship()
  }, [])

  const allStarships = starship.map((ship, index) => {
    return (
      <div className="container" key={index}>
        <div className="">{ship.name}</div>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <section>
      <div className="">
        <div className="ships">{allStarships}</div>
        </div>
      </section>
      
    </div>
  );
}

export default App;