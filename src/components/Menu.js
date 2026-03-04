import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
export default function Menu()
{
    const navigate=useNavigate();
    return(
        <>
        <div className="menu-container">
            <div className="menu-cards">
                <p className="menu-headings">Searching</p>
                <hr/>
                <div className="menu-optionbox">
                    <button   className=" menu-options" onClick={()=>navigate("/linearsearch")}>Linear Search</button>
                    <button  className=" menu-options" onClick={()=>navigate("/binarysearch")}>Binary Search</button>
                </div>   
            </div>

            <div className="menu-cards">
                <p className="menu-headings">Sorting</p>
                <hr/>
                <div className="menu-optionbox">
                    <button   className=" menu-options" onClick={()=>navigate("/bubblesort")}>Bubble Sort</button>
                    <button  className=" menu-options" onClick={()=>navigate("/insertionsort")}>Insertion Sort</button>
                    <button  className=" menu-options" onClick={()=>navigate("/selectionsort")}>Selection Sort</button>
                </div>
            </div>
            


            <div className="menu-cards">
                <p className="menu-headings">Stack</p>
                <hr/>
                <div className="menu-optionbox">
                    <button   className=" menu-options" onClick={()=>navigate("/stack")}>Push & Pop</button>
                 
                </div>
            </div>
            

            <div className="menu-cards">
                <p className="menu-headings">Queue</p>
                <hr/>
                <div className="menu-optionbox">
                    <button   className=" menu-options" onClick={()=>navigate("/queue")}>Linear Queue</button>
                     <button   className=" menu-options" onClick={()=>navigate("/circular_queue")}>Circular Queue</button>
                    <button   className=" menu-options" onClick={()=>navigate("/double_ended_queue")}>Double-ended Queue</button>
                </div>   
            </div>
        </div>
        </>
    )
}