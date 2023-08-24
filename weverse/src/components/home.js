import './home.css'
import {popup} from './popup';
//import Signup from '.components/popup' 
//import { useState } from "react";

function home(){
   // const[Display, setDisplay] = useState(false);
    return(
        <div>
   
    <div className="banner">
        <img src="https://cdn-v2pstatic.weverse.io/wev_web_fe/assets/web/home_banner_slogan.gif" height="300px" width="500px" className="centerimg"/>
    </div>
    <h2 className="lookingartist">Looking for new artist?</h2>
        </div>
    );
}
export default home;