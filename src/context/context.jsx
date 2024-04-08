import { createContext, useState } from "react";
import runChat from "../config/API";

export const Context = createContext();


const ContextProvider = (props)=>{
    
    const[input,setInput] = useState("")
    const[recentPrompt,setRecentPrompt] = useState("")
    const[prevPrompt,setPrevPrompt] = useState([])
    const[showResult,setShowResult] = useState(false)
    const[loading,setLoading] = useState(false)
    const[resultData,setResultData] = useState("")
    const[darkMode, setDarkMode] = useState(false);  
    const [expanded, setExpanded] = useState(false)

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    const handleToggle = () => {
        setExpanded(prev => !prev);
    };

const onSent = async (prompt)=>{
    setResultData("")
    setShowResult(true)
    setLoading(true)
    let response;
    if(prompt !== undefined){
        response= await runChat(prompt)
        setRecentPrompt(prompt)
    }
    else{
        setPrevPrompt(prev=>[...prev,input]);
        setRecentPrompt(input);
        response = await runChat(input);
    }
     
    setResultData(response)
    setInput("")
    setLoading(false)

}    


 
const contextValue={
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat,
        darkMode,  
        toggleDarkMode,
        expanded,
        handleToggle
}

return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );



}
export default ContextProvider