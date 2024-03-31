import React, {useState} from "react";

const Car2 = (props) =>{
    const [textColor, setTextColor] = useState('red');
    const [backColor, setBackColor] = useState('blue');
    
    const changeColor = () =>{
        const {colors} = props
        const randomNumberText = Math.floor(Math.random()*colors.length)
        const randomNumberBack = Math.floor(Math.random()*colors.length)
        setTextColor(colors[randomNumberText])
        setBackColor(colors[randomNumberBack])
    }
  
    return(
      <>
        <div>
          <p>Hopefully it will work</p>
          <p style={{color:textColor, backgroundColor: backColor}}>{backColor}</p>
          <button onClick={changeColor}>Button</button>
        </div>
      </>
    )
  }

  export default Car2