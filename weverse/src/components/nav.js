import './content.css';
import {useNavigate} from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    const handleArtist=()=>{
       navigate("/artist")
    }
    const handleFeed=()=>{
        navigate("/feed")
     }
    return(
        <div>
            <div className="navbar">
            <nav>
            <ul className="navlist">
            <li onClick={handleFeed}>Feed</li> 
            <li>Media</li> 
            <li onClick={handleArtist} >Artist</li> 
            </ul>
            
  
            </nav>
            </div>
           
        </div>
    )
}
export default Navbar;