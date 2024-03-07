import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import {BASE_URL} from '../App'

const Product = (props) =>{
    const [product, useProduct] = useState([]);
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() =>{
        getInfo()
    },[])

    const getInfo = async() =>{
        try{
            const res = await fetch(`${BASE_URL}/api/products/${params.id}`)
            const data = await res.json();
            console.log(data);
            useProduct(data)
        }catch(error){
        console.log(error);
        }
    }

const goToShop = () =>{
    navigate('/')
}

    return (
        <>
        <h2>Product</h2>
        {
            product.map((item)=>{
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })
        }
        <Link to={'/'}>Continue Shopping</Link>
        <div>
            <button onClick={()=>goToShop()}>Go Back to Shop</button>
        </div>
        </>
    )

};
export default Product