import React from "react"
import './card.css';

export default function Card(props){
    return (
        <div className="cardcont">
            <img className="img1" src={props.img}></img>
            <div className="contents">
                <h3 className="head3"><i className="uil uil-map-marker Mark"></i> {props.title1}</h3>
                <h2 className="head2">{props.title2}</h2><br></br>
                <p className="dates"><b>{props.date}</b></p>
                <p className="paragraph">{props.description}</p>
            </div>
        </div>
    )
}