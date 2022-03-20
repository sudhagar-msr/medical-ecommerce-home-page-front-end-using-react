import React from "react";
import products from "../products";





function Cards(props){
    return (
        <div className="card col-md-3" style={{width: "18rem", marginLeft: "20px", marginTop: "40px"}}>
        <img className="card-img-top" src={props.img} style={{width: "200px", height: "200px"}}/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">   Rate : {props.rate}</p>
            <a href="#" className="btn btn-primary">Buy now</a>
        </div>
    </div>
    );
}

export default Cards;