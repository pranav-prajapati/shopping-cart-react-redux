import axios from "axios";

export async function getProducts(){
    const url="https://fakestoreapi.com/products"
    const {data}= await axios(url)
    return data
}