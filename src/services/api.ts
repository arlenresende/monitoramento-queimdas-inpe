import axios from 'axios';

const api = axios.create ({
    baseURL: "https://cors-anywhere.herokuapp.com/http://queimadas.dgi.inpe.br/queimadas/dados-abertos/",
    
});

export default api;