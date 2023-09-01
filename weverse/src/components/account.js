import {useNavigate} from "react-router-dom";
function Account(props){
   // console.log("claeed");
   // if(props.trigger){
    const navigate = useNavigate();
    const handleweverseclick=()=>{
        navigate("/mainpage")
    }
return (
        <div>
       <div className="head">
       <h2 className="headverse" onClick={handleweverseclick}>weverse</h2>
       <button className="btn2" >ᴬʳᵐʸ♡ᵇᵗˢ</button>
    </div>
    </div>
);

    }
  /*  else{
        console.log("not working");
    }
    console.log(props.trigger);
}*/
export default Account;