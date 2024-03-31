import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = ()=>{
    setTheme((prevTheme) => {
        console.log(prevTheme);
        if(prevTheme === "light"){
            return 'dark';
        }else {
            return "light"
        }
    });
    }
    return(
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )

};


const useTheme = () =>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be within a ThemeProvider")
    }
    return context
}

export default { ThemeProvider, useTheme } 
