
const SWAPI_BASE_URL = 'https://swapi.co/api/people';
export const fetchAllCharacters = () => {
    return fetch(`${SWAPI_BASE_URL}`).then(response => 
        response.json()    
    );
};