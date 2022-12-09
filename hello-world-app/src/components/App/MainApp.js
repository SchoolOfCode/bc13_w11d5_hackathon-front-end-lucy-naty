import {  useState, createContext } from "react";
import  searchCountry  from "../../services/services.js";
import { CountryCard } from "../CountryCard/CountryCard.js";
import useJustBecauseHook from "../../hooks/justBecauseHook.js";
import "./App.css"
import "./MainApp.css"

export const countryContext = createContext(null)

function MainApp() {
  
  // const [searchTerm, setSearchTerm] = useState()
  //We had to include a custom hook so here it is. We would have done something different if we were reusing code e.g. if our app was bigger

  const [searchTerm, setSearchTerm] = useJustBecauseHook()

  const [searchResults, setSearchResults] = useState()
   
  
  const handleSearch = async () => {
      const response = await searchCountry(searchTerm)
      console.log(response)
            setSearchResults(response.payload)
            console.log(response)
    }

  const handleInputchange = (e) => {
    setSearchTerm(e.target.value)
  }

  const [payload,setPayload]= useState({
    country : null ,
    image : null, 
})  

function onChangeCountry(e){
  let text = e.target.value
  setPayload({...payload, country: text})
}

function onChangeImage(e){
  let text = e.target.value 
  setPayload({...payload, image: text})
}

  async function onClick(e){
    e.preventDefault()
    let obj = {country: payload.country, image: payload.image}
    await fetch("https://backend-of-hello-world.onrender.com/api/country",{method:'POST',headers:{'Content-Type':'application/json'},
    body: JSON.stringify(obj)})
    .then(response => response.json())
    //get a console log of the response
    .then(response => console.log(JSON.stringify(response)))
}

 
  return (
    
    
    <div className="App">
      <h1>Search Country</h1>
      <input className="inputDiv" onChange={handleInputchange} />
      <button className="button-49" onClick={handleSearch}>Search</button>
      <div className="list">
      <countryContext.Provider value={searchResults}>
        {searchResults && <CountryCard key={searchResults?.id} country={searchResults?.country} image={searchResults?.image}/>}
      </countryContext.Provider>
      </div>

      <div className="form">
        <form className="formContainer">
            <label>Country</label>
            <input type="text" onChange={onChangeCountry} />

            <label className="spacingDiv">Image</label>
            <input type="text" onChange={onChangeImage} />

            <div className="spacingDiv">

            <button className="button-49" onClick={onClick}>Submit</button>

            </div>
        </form>
    </div>
  </div>
      
  );
}

export default MainApp;
