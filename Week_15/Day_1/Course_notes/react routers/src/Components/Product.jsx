import { useParams, Link, useNavigate } from "react-router-dom";

const Product = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    // console.log(params);
    const goBack = ()=> {
        navigate('/about')
    }
    return (
        <>
            <h2>Iphone {params.id}</h2>
            <Link to={'/shop'}>Go Back to the Shop</Link>
            <button onClick={() => goBack()}>About us</button>
        </>
    );
};
export default Product