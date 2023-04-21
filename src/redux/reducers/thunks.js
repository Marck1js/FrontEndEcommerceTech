import axios from "axios";
import { saveproducts } from "./counterReducer";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        
        const resp = await fetch('http://localhost:8080/product/seachAllProducts').then( e => e.json());
        const data = resp // Array
       
        dispatch( saveproducts(data))

    }
};
