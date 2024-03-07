
import { useContext } from "react"
import { AppContext } from "../App"

const Button = () =>{
    const {count, setCount} = useContext(AppContext)
    return (
        <>
            <div>
                <button onClick={()=> props.setCount(props.count + 1)}> + </button>
            </div>
        </>
    )
}

export default Button


