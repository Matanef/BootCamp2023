import React from "react";

class FormActor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            image: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event)=>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('Form submitted!');
        console.log('First Name:', this.state.firstname);
        console.log('Last Name:', this.state.lastname);
        console.log('Image:', this.state.image);
    }

    render(){
        return (
            <>
        <form onSubmit={this.handleSubmit}>
        firstName <input type="text" name="firstname" onChange={this.handleInputChange}/><br></br>
        lastName <input type="text" name="lastname" onChange={this.handleInputChange}/><br></br>
        image <input type="text" name="image" onChange={this.handleInputChange}/><br></br>
        <button type="submit">Submit</button>
    </form>
    <h3>this.state.firstname: {event.target.value}</h3>
    <button></button>
    </>
        )

    }
}

export default FormActor