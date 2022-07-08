import { useState, useContext } from "react"
import "./basiccard.css";
import { cardContext } from "../Context/contextprovider";



export const BasicCard = ({props})=>{

    const {click, check, setCheck, setClick} = useContext(cardContext);

    // const [clicked, setClicked] = useState([]);

    const handleClicked = ()=>{
        console.log("clicked");
        setClick(props);
        setCheck(true);
    }
    // console.log(click);

    return (
        
        // <div>{props.name}</div>
        <div className="mainbasic" onClick={handleClicked}>
            <div className="searchimage">
                <img src={props.image} alt="anythind" className="insideimage"></img>
                <p className="nameof">{props.name}</p>
            </div>
            <div className="description">
                <span className={props.status==="Alive" ? "greentick" : "notick"}></span>
                <p className="species">{props.status}-{props.species}</p>
            </div>
        </div>
    )
}