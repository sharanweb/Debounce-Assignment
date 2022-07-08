import { useState, useContext } from "react"
 import "./Modal.css";
import { cardContext } from "../Context/contextprovider";



export const Modal = ({props}) =>{
    const {click, setClick, check, setCheck} = useContext(cardContext);
    console.log(click);

    const closebox = () =>{
        setCheck(false)
    }
    return (
        <div className="mainmodal">
            <div className="submodal">
            <span className="close" onClick={closebox}>x</span>
            <div className="upper">
                <div className="imagemodal">
                    <img src={click.image} alt="anyhting" className="detailimg"></img>
                </div>
                <div className="somedetail">
                    <h3 className="hisname">{click.name}</h3>
                    <div className="hisstatus">
                      <span className={click.status==="Alive" ? "greentick1" : "notick1"}></span>
                      <p className="species2">{click.status}-{click.species}</p>
                    </div>
                </div>
                <div className="descriptionmodal"></div>
            </div>
            <div className="lower">
                <div className="low">
                    <div className="left">
                        <p className="designation">Gender</p>
                        <p className="particular">{click.gender}</p>
                    </div>
                    <div className="left">
                        <p className="designation">Location</p>
                        <p className="particular">{click.location.name}</p>
                    </div>
                </div>
                <div className="low1">
                <div className="left">
                        <p className="designation">Species</p>
                        <p className="particular">{click.species}</p>
                    </div>
                    <div className="left">
                        <p className="designation">Origin</p>
                        <p className="particular">{click.origin.name}</p>
                    </div>

                </div>
            </div>

            </div>
        </div>
    )
}