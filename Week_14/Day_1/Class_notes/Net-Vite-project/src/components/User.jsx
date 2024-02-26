import './user.css'
import Switch from '@mui/material/Switch';

const User = (props) => {
    return (<div 
        className="dib bg-light-green br3 pa3 ma3 bw2 grow shadow-5">
        <img src={`https://robohash.org/${props.id}?size=150x150`}/>
        <h2>{props.name}</h2>
        <h4>{props.username}</h4>
        <p>{props.email}</p>
        <Switch defaultChecked />
    </div>
    )
}


export default User;