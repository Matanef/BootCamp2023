import React from "react";

class AppClass extends  React.Component{
    constructor(){
        super();
        this.state = {
            username: 'John'
        };
        console.log('first ==>constractor');
    }

    handleChange = (e)=>{
        this.setState({username: e.target.value})
    }
    componentDidMount = () => {
        
        console.log('3 ==> componentDidMount');
        setTimeout(() => {
            this.setState({username: 'Dan'})
        }, 5000);
    };

    componentDidUpdate =(prepProps, prevState) =>{
        console.log('4===> componentDidmount');
        console.log('prepProps', prepProps);
        console.log('prevState ==> ', prevState);
        if(prevState.username=== 'John'){
            alert('Help')
        }
        if(prevState.username=== 'Dan'){
            alert('Hello Dan!!!')

        }
    }
    render(){
        console.log('second ==> render');
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Username: {this.state.username}</h2>
                <input onChange={this.handleChange} />
            </div>
        )
    }
}

export default AppClass;