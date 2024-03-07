import { useContext } from "react";
import { AppContext } from "../App";

const Testcontext = (props) =>{
    const {count, setCount} = useContext(AppContext);
    return (
        <>
            <h2>Example</h2>
            {count}
            <button onClick={()=> setCount(count+1)}>add 1</button>
        </>
    )
}

export default Testcontext