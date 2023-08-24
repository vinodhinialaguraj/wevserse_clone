import './home.css';
import {useState} from 'react';
import Popup from'./popup';

function Signup(){
    const[show, setShow]= useState(false);
    const handleShow=()=>{
        setShow(true)
       }
    return(
        <div>
            <div className="head">
       
       <h2 className="headverse">weverse</h2>
       <button className="btn" onClick={handleShow}>sign in</button>
        <Popup display={show} setDisplay={setShow}/>
   </div>
        </div>
    )
    
}
export default Signup;