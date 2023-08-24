function popup(props){
    if(props.display){
        return (
             
          
            <div className="signInForm">
            <div className="formBorder">
            <form id="signUpForm">
                <br/>
                <label for="username">UserName</label><br/>
                <input type="text" name="username" id="username" placeholder="your name" className="inputbox"/><br/><br/>
                <label for="email">E-mail</label><br/>
                <input type="email" name="email" id="email" placeholder="abc@gmail.com" className="inputbox"/><br/><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="password" className="inputbox"/><br/>
            </form>
            <br/>
            <button type="submit" form="signUpForm" value="submit" className="signinbtn" onClick={()=>props.setDisplay(false)}>Submit</button>
           
           </div>
            </div>
             
            
            );
            
    }
    else{
        console.log("else works for some reson")
    }
    console.log(props.trigger);
   
}
export default popup;