import React from "react";
import '../tours/Tours.css'
import Tour from "./tour/Tour";


const dataBase = require('../../data/db.json');


function Tours() {
    return (

        <div className="tours">
            {dataBase.map((item) => {
                return (
                    <div key={item.id}>
                        <Tour tour={item} />
                    </div>
                )
            })
            }
        </div>
    )
}


export default Tours;