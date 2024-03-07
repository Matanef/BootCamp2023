import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {BASE_URL} from '../App'

const Products = (props) =>{
    const [products, useProducts] = useState([]);

    useEffect(() =>{
        allProducts()
    },[])

    const allProducts = async() =>{
        try{
            const res = await fetch(BASE_URL+ '/api/products')
            const data = await res.json();
            useProducts(data)
        }catch(error){
        console.log(error);
        }
    }
    return(
        <>
        <h2>Shop</h2>
        {products.map((item) =>{
            return (
                <div
                key={item.id} style={{border: '3px solid blue', margin: '22px', padding: ' 20px'}}>
                    <h2>{item.name}</h2>
                    <Link to={`/${item.id}`}>Buy Now</Link>
                </div>
            )
        })}
        </>
    )
}

export default Products