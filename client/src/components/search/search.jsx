import { useState, useCallback, useContext } from "react";
import axios from "axios";
import { BasicCard } from "../basiccard/basiccard";
import "./search.css";
 import { Modal } from "../Details/Modal";
 import { cardContext } from "../Context/contextprovider";
 import {BsSearch} from "react-icons/bs"


export const Search = ()=>{
    const [data, setData] = useState([]);
    // const [clicked, setClicked] = useState(false);
    // const [modaldata, setModaldata] = useState({});
    const {click, check, setCheck, setClick} = useContext(cardContext);

    const getData = (event)=>{
        axios.get("https://rickandmortyapi.com/api/character/?name=rick&page=1").then((res)=>{
            setData(res.data.results);
        })
    }

    const debounce = (func)=>{
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            },1000);

        }
    }

    const afterdebounce  = useCallback(debounce(getData), [])

    // const handleClick = ()=>{
    //     console.log("clicked");
    //     // setClicked(true);
    //     // setModaldata(e);

    // }


    return(
        <div>
            {check ? <Modal></Modal> : null}
            <h1 className="heading">Rick and Morty Search</h1>
            <div className="inputdiv">
                <BsSearch className="iosearch"></BsSearch>
            <input type={"text"} name = {"search"} onChange={afterdebounce} className="inputtag" placeholder="Search for a Contact"></input>

            </div>
            
            
            <div className="listcontainer">
                {
                    data.map((el,index)=>(
                        <BasicCard props={el}  key={index}></BasicCard>
                    ))
                }
            </div>
            
            {/* <Modal></Modal> */}

        </div>
    )
}