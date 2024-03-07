import Product from "./Product"
import {Link} from "react-router-dom"
import { useState } from "react";

const items = [
    {id:15, name:'Iphone15'},
    {id:14, name:'Iphone14'},
    {id:13, name:'Iphone13'}
]
const Shop = () =>{
// const [products, setProduct] = useState(items);


    return (
    <>
        <h2>Shop</h2>
        {items.map((item) => {
            return(
                <Link to={`/product/${item.id}`}>{item.name}</Link>
            )
        })}
        <Link to={'/product/15'}>Iphone</Link>
    </>
    );
};

export default Shop