import './App.css';
import {useState, useEffect} from "react"
import Form from './components/Form'; 
import Ships from './components/Ships';




function App() {
  const[starShip, setStarShip] = useState([])
  const getStarShip =  async (search)=>{
    const respond =   await fetch ("http://swapi.dev/api/starships/")
    const data =   await respond.json()
    setStarShip (data.results)
    // let newSearch;
    // if (search ===""){
    //   setStarShip (data.results)
    // }else{
    //   newSearch = data.results.name.filter((ship)=> ship.results.name === search)
    //   setStarShip(newSearch)
    //   }
    }
  useEffect(()=>{getStarShip()},[])
  return (
    <div className="App">
      <h1 className="header">STAR WARS STARSHIPS</h1>

      <Ships starShip={starShip}/>
    </div>
  );
}

//<Form search={getStarShip}/>

export default App;
