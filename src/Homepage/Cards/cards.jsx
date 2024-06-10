import React from "react";
import "./card.css";

function Cards(){
    const title = ["Presentation Design", "Audio-Visual Production", "Translation Services", "Graphic Design", "Research & Analytics", "Data Processing"];
    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta."    
    return ( 
        <div className="cardWrapper">
        { title.map((ele, ind)=>(
            <div className="cardDiv" key={ind+1}>
            <div className="titleCardText">
                {ele}
            </div>
            <div className="cardContent">
                {content}
            </div>
            </div>
        ))
        }
        </div>
    )
}

export default Cards;