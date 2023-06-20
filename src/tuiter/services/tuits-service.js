import axios from 'axios';

//const TUITS_API = 'https://tuiter-node-server-app-i75b.onrender.com/api/tuits';
const TUITS_API = 'http://localhost:4000/api/tuits';
const request = axios.create({
  withCredentials: true,
});

export const createTuit = async (tuit) => {
    const response = await request.post(TUITS_API, tuit)
    return response.data;
   }
   

export const findTuits = async () => {
    const response = await request.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   
   export const deleteTuit = async (tid) => {
    const response = await request.delete(`${TUITS_API}/${tid}`)
    return response.data
  }
  
  export const updateTuit = async (tuit) => {
    const response = await request
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  