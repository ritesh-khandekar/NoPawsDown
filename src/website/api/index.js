import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})


export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const adopt = (adoptData) => API.post('/adopt', adoptData);

export const donate = (donateData) => API.post('/donate', donateData);

export const givepet = (givepetData) => API.post('/pets/givepet', givepetData);
export const getpets = () => API.get('/pets/getpets');

export const admin = () => API.get('/admin/');
export const adminGetPets = () => API.get('/admin/pets');
export const adminGetDonations = () => API.get('/admin/donations');
export const adminGetNGOs = () => API.get('/admin/ngos');
export const adminGetUsers = () => API.get('/admin/users');
export const adminGetAdoptRequests = () => API.get('/admin/adoptrequests');

export const getngo = (id) => API.post('/ngo', { id });
export const getDonations = (id) => API.post('/ngo/donations', { id });
export const getNGOs = () => API.get('/ngo/all');
export const getAARs = () => API.get('/ngo/requests');

export const approveRequest = (data) => API.post('/ngo/requests/approve',data);
export const rejectRequest = (data) => API.post('/ngo/requests/reject',data);
export const ngoLogin = (authData) => API.post('/ngo/login',authData);
export const ngoRegister = (authData) => API.post('/ngo/register',authData);