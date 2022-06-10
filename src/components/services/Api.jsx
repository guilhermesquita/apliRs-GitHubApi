import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api.github.com',
});

api.get('users/guilhermesquita')

export default Api