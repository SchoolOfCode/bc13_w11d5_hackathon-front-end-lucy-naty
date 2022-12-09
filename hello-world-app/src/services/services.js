

const searchCountry = async (searchTerm) => {
    return fetch(`https://backend-of-hello-world.onrender.com/api/country/${searchTerm}`)
    .then((response) => response.json()) 
}

export default searchCountry