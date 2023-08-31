import {useState} from 'react';
import PostboxPopup from './postboxpopup';
import './content.css'
function Fans(){
    const[show, setShow]= useState(false);
    
    const handleshow =()=>{
        setShow(true)
      
    }
    return(
        <div>
            <div >
                <div>
                <div   />
                <div onClick={handleshow} className="postbox">click to add post</div>
                <PostboxPopup trigger={show} setTrigger={setShow}/>
                </div>
               
               
            </div>
        </div>
    )
}
export default Fans;