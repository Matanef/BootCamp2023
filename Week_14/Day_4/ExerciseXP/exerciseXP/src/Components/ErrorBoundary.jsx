import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            error: null,
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
                <div>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children;

    }
}


export default ErrorBoundary