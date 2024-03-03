import React from "react";

class BuggyCounter extends React.Component{
    constructor(){
      super();
      this.state= {
        counter: 0
      }
      console.log('first ==>constractor', this.state.counter);
      };
  
      handleClick = ()=>{
        const { counter } = this.state;
        this.setState({counter: counter +1})
        console.log('fdgdfgdsfg' ,counter+1);
    }
    componentDidUpdate =(prepProps, prevState) =>{
      const { counter } = this.state;
      console.log('4===> componentDidUpdate');
      if(prevState.counter > 5){
          return(
            <>
              <div>
                {counter}
              </div>
            </>
          )
      }
  }
  
  
      render(){
        console.log('second ==> render');
        if(this.state.counter === 5){
          throw new Error('crashed')
          // this.state.hasError
          // return (
          //   <div>
          //     <p>I Crashed</p><br></br>
  
          //   </div>
          // )
        }
        return(
          <>
            <div>
              <button onClick={this.handleClick}>{this.state.counter}</button>          
            </div>
          </>
        )
    }   
  }

  export default BuggyCounter