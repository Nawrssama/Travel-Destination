import React from "react";
import '../tours/Tours.css'
const data = require("../../data/db.json");
function Tours(){
    console.log(data);
    return(
        <div className="tours">
            <h2>Travel list</h2>
            {data.map((item)=>{
                return (
                    <div key={item.ID}>
                        <h3>{item.name}</h3>
                        <img className="img" src={item.image} alt={item.name}></img>


                    </div>
                )
            })}
        </div>
    )
}


export default Tours;