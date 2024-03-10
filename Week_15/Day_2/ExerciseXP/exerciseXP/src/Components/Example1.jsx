import React from "react";
import datafile from './Data.json'

class Example1 extends  React.Component{
    constructor(){
        super();
        this.state = {
           socialMedias: datafile.SocialMedias
        };
        console.log('first ==>constractor');
    }




    render(){
        console.log('second ==> render');
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Social Medias</h2>
                <ul>
                {this.state.socialMedias.map((socialMedia, index)=> (
                <li key={index}>{socialMedia}</li>
                ))}
                </ul>
            </div>
        )
    }
}

export default Example1;