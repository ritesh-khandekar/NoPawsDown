import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})


export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const adopt = (adoptData) => API.post('/adopt', adoptData);

export const givepet = (givepetData) => API.post('/pets/givepet', givepetData);
export const getpets = () => API.get('/pets/getpets');