import React, { Component } from "react";

class TestA extends Component {
    constructor(){
        super()
        this.state ={
            name: 'John',
            users: [],
        }
        // this.name = 'John'
    }
    getUsers = ()=>{
        // this.setState({name: 'Dan'})
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            this.setState({users: data})
            console.log({users: data})
        })
        .catch((e)=>{
            console.log(e);
        })

    };

    render(){
        return(
            <>
            <h2>I am a Class Component</h2>
            <h2>{this.state.name}</h2>
            <button onClick={this.getUsers}>Get Users Data</button>
            {
                this.state.users.map(item=>{
                    return (
                    <div>
                        {item.name}<br></br>
                        {item.email}
                    </div>
                        )
                })
            }
            </>
        )
    }
}

export default TestA

