import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Bars from "./things/bars";
function Visualizer()
{
    const [arr,setArr]=useState([298,345,199,243,233,212])
    return(
        <>
        <div className="Vizbars">
           
            <Bars arr={arr}/>
        </div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Visualizer />);