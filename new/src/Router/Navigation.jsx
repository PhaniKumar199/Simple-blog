
import { useNavigate } from "react-router-dom";
import './index.css';
const Navigation=()=>{
    const navigate=useNavigate();
    const handleHome=()=>{
        navigate('/')
    }
    const handleAbout=()=>{
        navigate('/about')
    }
    const handleRecords=()=>{
        navigate('/records')
    }
    
    return(
        <div className="card">
            <nav className="navbar">
            <div className="icon">
            <img  src="/assets/iconms.jpg" alt="icon" width={"80px"}/>
            </div>
            <div className="clicks">
            <button onClick={handleHome}>Home </button>
            <button onClick={handleAbout}> About</button>
            <button onClick={handleRecords}> Records</button>
            </div>
             </nav>
        </div>
    )
}
export default Navigation;