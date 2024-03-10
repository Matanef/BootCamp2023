import React from "react";
import datafile from './Data.json'

class Example2 extends  React.Component{
    constructor(){
        super();
        this.state = {
           skills: datafile.Skills
        };
        console.log('first ==>constractor');
    }




    render(){
        console.log('second ==> render');
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Skills</h2>
                <ul>
                    {
                    this.state.skills.map((skillArea, index)=> (
                    <li key={index}>
                        <h3>{skillArea.Area}</h3>
                        <ul>
                            {skillArea.SkillSet.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.Name} - {skill.Hot ? 'Hot' : 'Not Hot'}
                                    
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
                }
                </ul>
            </div>
        )
    }
}

export default Example2;