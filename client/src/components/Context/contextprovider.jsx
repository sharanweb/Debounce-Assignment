import { createContext, useState } from "react";

export const cardContext = createContext();
export const CardContextProvider = ({children}) =>{
    const [click, setClick] = useState({});
    const [check, setCheck] = useState(false);

    // const handleClick = (data)=>{
    //     setClick(data);
    // }
    // console.log(click)
    

    return <cardContext.Provider value={{
        click, setClick,check, setCheck
    }}>{children}</cardContext.Provider>
}