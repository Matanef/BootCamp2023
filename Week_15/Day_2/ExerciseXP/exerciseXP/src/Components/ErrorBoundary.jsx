import React from "react";
import Home from './Home'
import Profile from './Profile'
import Shop from './Shop'
import { Routes, Route, Link } from 'react-router-dom'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            error: false,
            errorInfo: null
        }
    }
    componentDidCatch = (error, errorInfo) =>{
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.log('===> ErrorBoundary');
    }
    render(){
        if(this.state.error){
            console.log("from ErrorBoundary");
            return (
                <>
                <div> 
                    <h2>An error has occured</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
                </>
            )
        }
        return this.props.children;

    }
}


export default ErrorBoundary