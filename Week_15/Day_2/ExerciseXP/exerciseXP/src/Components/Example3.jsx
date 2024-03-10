import React from "react";
import datafile from './Data.json'

class Example3 extends React.Component{
    constructor(){
        super();
        this.state = {
            experiance: datafile.Experiences
        }
    }
    render(){
        console.log('second ==> render');
        return (
            <>
            <div>
                <h2>Experience</h2>
                <ul>
                    {this.state.experiance.map((experienceRoles, index) =>{
                        return (
                    <li key={index}>
                        <img src={experienceRoles.logo}/>
                        <p>{experienceRoles.companyName}</p>
                        <p><a href={experienceRoles.url}>{experienceRoles.url}</a></p>
                        
                        <ul>
                            {
                            experienceRoles.roles.map((experience, experienceIndex) => {
                                return (
                                <li key={experienceIndex}>
                                    {experience.title}<br/>
                                    {experience.startDate}<br/>
                                    {experience.location}<br/>
                                    {experience.description}<br/>
                                </li>
                                )
                            })
                            }
                        </ul>
                    </li>
                        )
                    })}
                </ul>
            </div>
            </>
        )
    }
}

export default Example3