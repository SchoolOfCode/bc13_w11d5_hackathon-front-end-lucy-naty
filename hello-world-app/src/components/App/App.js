import {  useState } from "react";
import  searchCountry  from "../../services/services.js";
import { CountryCard } from "../CountryCard/CountryCard.js";

 
function App() {
  //this use state it takes in movie and setMovie which the action.
  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState()
  //useEffect is fetching my json object response 
  
  const handleSearch = async () => {
      const response = await searchCountry(searchTerm)
      console.log(response)
            setSearchResults(response.payload)
            console.log(response)
    }

  const handleInputchange = (e) => {
    setSearchTerm(e.target.value)
  }
 
  return (
    
    
    <div className="App">
      <h1>Search Country:</h1>
      <input onChange={handleInputchange} />
      <button onClick={handleSearch}>Search</button>
      <div className="list">
        {searchResults && <CountryCard key={searchResults?.id} country={searchResults?.country} image={searchResults?.image}/>}
      </div>
    </div>
      
  );
}

export default App;
