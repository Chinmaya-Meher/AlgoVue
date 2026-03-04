import React from "react";
export default function Stackpage({arr,tos,isPeeking})
{
    return(
        <>
        
        <div className="stack-container">
            {
                arr.map((item,index)=>(
                    <div className={`stack-bars ${isPeeking && index===tos ? "stack-top-glow" : ""}`}
 key={index}>{item}</div>
                ))
                
            }
            
        </div>
        </>
    )
}