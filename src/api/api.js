import axios from "axios";

// http://localhost:5000/laptops
export const API_URL = "https://ecommerce-laps.herokuapp.com/laptops"

export const getLaptops =()=>axios.get(API_URL)
export const postLaptop =(laptop)=>axios.post(API_URL,laptop)
export const putLaptop =(id,updatedLaptop)=>axios.put(API_URL+`/${id}`,updatedLaptop)
export const deleteLaptop =(id)=>axios.delete(API_URL+`/${id}`)
  
  

