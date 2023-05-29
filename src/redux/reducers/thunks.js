import axios from "axios";
import { saveproducts,  saveJsonServerProducts } from "./counterReducer";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        
        const resp = await fetch('http://localhost:8080/product/seachAllProducts').then( e => e.json());
        const data = resp // Array
       
        dispatch( saveproducts(data))

    }
};

export const getJsonServerProducts = () => {
    return async (dispatch, getState) => {

        const resp = await fetch('http://localhost:3000/products').then( e => e.json());
        console.log(resp);
        // dispatch( saveJsonServerProducts(resp))

    }
};
