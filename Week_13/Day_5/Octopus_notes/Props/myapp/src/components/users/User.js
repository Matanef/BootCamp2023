import { 
    user_style,
    username } from "./style";
import './user.css'

const User = (props) => {
    console.log(props);
    const {name, email} = props.userinfo


    return (<div className="userinfo">
        <h2 className="username">{name}</h2>
        <p>{email}</p>
    </div>)
}

export default User;