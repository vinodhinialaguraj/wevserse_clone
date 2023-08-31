import {useState} from "react";
import {useNavigate} from "react-router-dom";
//import Account from "./account";
import './home.css';
function Popup(props){
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
   // const [account, setAccount] = useState(false);
   
       const signupfunc=()=>{
        props.setDisplay(false);
       
       navigate('/mainpage')
        console.log("set func works");
       }
    if(props.display){
        return (
             
          
            <div className="signInForm">
            <div className="formBorder">
            <form id="signUpForm">
                <br/>
                <label for="username">UserName</label><br/>
                <input type="text" name="username" id="username" placeholder="your name" className="inputbox" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
                <label for="email">E-mail</label><br/>
                <input type="email" name="email" id="email" placeholder="abc@gmail.com" className="inputbox"/><br/><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="password" className="inputbox"/><br/>
            </form>
            <br/>
            <button type="submit" form="signUpForm" value="submit" className="signinbtn" onClick={()=>signupfunc()}>Submit</button>
       
            </div>
            </div>
             
            
            );
            
    }
    
   // console.log(display);
   
}
export default Popup;