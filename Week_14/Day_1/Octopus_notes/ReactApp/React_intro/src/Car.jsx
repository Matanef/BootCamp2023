import React from "react";
import App from "./App";
import './Car.css';


//Class Component syntax
// class Car extends React.Component {
//     render(){
//         return <h2>Hi, I am a Car</h2>
//     }
// }

//function Component syntax

// const Car = (props) => {
//     console.log(props);
//     console.log(props.cars);
//     let {name ,carBrand} = props;
    
//     if (!Array.isArray(props.cars)) {
//         return <p>No cars data</p>; // Render a message if props.cars is not an array
//     }

//     return (

//         <h2 className="title">Hi, I am a Car {carBrand}! My name is {name}</h2>
//     );
// };

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "blue",
        year: 1964
      };
    }
  
    //we change the value of the attribute
    changeColor = () => {
        let {colors} = this.props;
        let randomColorB = colors[Math.floor(Math.random() * colors.length)]
        let randomColorT = colors[Math.floor(Math.random() * colors.length)]
      this.setState({carColor: randomColorB});
      this.setState({textColor: randomColorT});
    }
  
    render() {
      const { chosenCar } = this.props
      return (
        <>
        <div>

        </div>
        <div>
          <h1>My {this.state.brand}</h1>
          <p style={{backgroundColor: this.state.carColor, color: this.state.textColor}}>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
  
          <button
            type="button"
            onClick={this.changeColor}
          > Change color</button>
  
        </div>
        </>
      );
    }
  }




//Destructuring

// const Car = (props) => {
//     let { name, carBrand } = props;
//     return <h2>Hi, I am a Car {carBrand}! My name is {name}</h2>;

// }

export default Car