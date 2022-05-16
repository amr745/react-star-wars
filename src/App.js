import {useState, useEffect} from "react";

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
      <div key={index}>
        {ship.name}
      </div>
    )
  })

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <section>
        {allStarships}
      </section>
    </div>
  );
}

export default App;