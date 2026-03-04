import { useNavigate } from "react-router-dom";
export default function Homepage()
{
  const navigate=useNavigate();
    return(<>
 


    <div className="herosection">
      <div className="hero-left">
        <p className="hero-left-txt1">Visualise DSA <br /> Like Never Before</p>
        <p className="hero-left-txt2">Interactive visualizations of sorting,stacks, <br />queues,trees and more.Learn by seeing <br />not just reading </p>
        <div className="hero-left-buttons">
          <button className="hero-btn1" onClick={()=>navigate("/menu")}>Start Visualizing</button>
          <button className="hero-btn2"onClick={()=>navigate("/learn")}>Learn DSA with JARVIS</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img"></div> 
      </div>
      
    </div></>)
}