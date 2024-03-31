import { useContext } from "react"
import { AppContext } from "./App"
import InputMessege from "./InputMessege"

const Messege = (props)=>{

    const { msg } = useContext(AppContext)
    return (
        <>
        <h2>{msg}</h2>
        <InputMessege/>
        </>
    )
}

export default Messege