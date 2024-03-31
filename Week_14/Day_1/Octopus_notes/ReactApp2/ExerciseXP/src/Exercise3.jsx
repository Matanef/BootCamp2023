import React from "react";
import "./Exercise.css"

class Exercise3 extends React.Component {

    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return(
            <>
            <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>this is an H1 tag</h1>
            <h1 style={style_header}>this is another H1 tag</h1>
            <p className="para">This is a Paragraph</p>
            <a href="https://www.youtube.com/watch?v=FTQbiNvZqaY">This is a link</a>
            <form>
                <label>mamama</label><br></br>
                <input placeholder="mamama"/>
            </form>
            <img src="https://www.goodfreephotos.com/albums/bolivia/other-bolivia/mountains-and-lake-landscape-scenic.jpg" width={'300px'}/>
            <ul>This is a List
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            </>
        )
    }
}

export default Exercise3