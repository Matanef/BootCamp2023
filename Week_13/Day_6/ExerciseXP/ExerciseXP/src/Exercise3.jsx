import React from 'react';
import img from './1.jpg'
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = () =>{
    const header = <h1 style= {style_header}>This is a header</h1>
    const paragraph = <p className='para'>some word to the paragraph</p>
    const link = <a href='https://www.youtube.com/watch?v=__4_fCgjI74'>A link</a>
    const form = 
    <form>
      <label>Enter your name:<br></br>
        <input type="text" /><br></br>
        <input type="submit" />
      </label>
    </form>
    const formtitle = <h2>This is a form</h2>

    const logo = <img src={img} alt='image' style= {{width: '450px', height:'350px'}}/>
    const list = <ul>
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
    </ul>

    return (
        <div>
            {header}
            {paragraph}
            {link}<br></br>
            i strongly recommend this song
            {formtitle}
            {form}
            {logo}
            {list}

        </div>
        );
}

export default Exercise
        


