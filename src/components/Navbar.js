import { useNavigate } from "react-router-dom";
export default function Navbar()
{
  const navigate=useNavigate();
    return(
        <>
           <div className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <div className="logo-img"></div> 
        <span className="logo-text">AlgoVue</span>
      </div>
      <div className="nav-buttons">
        <p className="nav-btn" onClick={() => navigate("/menu")}>Menu</p>
        <p className="nav-btn" onClick={() => navigate("/menu")} >Sorting</p>
        <p className="nav-btn"onClick={() => navigate("/menu")}>Stacks</p>
        <p className="nav-btn"onClick={() => navigate("/menu")}>Queues</p>

        <p className="nav-btn nav-learn" onClick={()=>navigate("/learn")}>Learn</p>
      </div>
    </div>
    </>
    )
}