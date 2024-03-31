import React from "react";
import './Actor.css'

// const Actor = (props)=> {
//     console.log(props);
//     console.log(props.actors);
//     return (
//         props.actors.map(actor =>(
//         <ul key={actor.id} className="unlist">
//             <li style={{border: '3px solid blue', backgroundColor: 'red'}}>{actor.firstName}</li>
//             <li style={{border: '3px solid purple', backgroundColor: 'orange'}}>{actor.lastName}</li>
//             <li style={{border: '3px solid yellow', backgroundColor: 'green'}}>{actor.image}</li>

//         </ul>
//         ))

//     )
// }


class Actor extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            firstName: props.firstName,
            lastName: props.lastName,
            image: props.image
        }
    }

    // handleInputChange = (event)=>{
    //     const {name, value} = event.target;
    //     this.setState({[name]: value})
    // }

    // handleSubmit = (event)=>{
    //     event.preventDefault();
    //     console.log('Form submitted!');
    //     console.log('First Name:', this.state.firstName);
    //     console.log('Last Name:', this.state.lastName);
    //     console.log('Image:', this.state.image);
    // }
    render(){
        return(
            <>
            <div>
            <ul className="unlist">
            <li style={{border: '3px solid blue', backgroundColor: 'red'}}>{this.state.firstName}</li>
            <li style={{border: '3px solid purple', backgroundColor: 'orange'}}>{this.state.lastName}</li>
            <li style={{border: '3px solid yellow', backgroundColor: 'green'}}>{this.state.image}</li>
            </ul>
            </div>

        
        </>
        )
    }
}

export default Actor