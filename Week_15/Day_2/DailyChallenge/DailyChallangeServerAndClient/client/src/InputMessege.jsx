import { useContext } from "react"
import { AppContext } from "./App"

const InputMessege = () =>{

    const {setMsg} = useContext(AppContext)
    return( 
        <>
            <div>
                <h2>Input Messege</h2>
                <input onChange={(e) => setMsg(e.target.value)}/>
            </div>
        </>
    )
};
export default InputMessege