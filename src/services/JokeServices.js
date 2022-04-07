const axios = require('axios');

export async function getAllJokes() {

    try{
        const response = await axios.get('https://api.chucknorris.io/jokes/search?query=all');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function searchJokes(term) {

    try{
        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${term}`);
        return response.data;
    }catch(error) {
        return [];
    }
    
}