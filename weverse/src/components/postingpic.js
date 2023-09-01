import './content.css'
function Imagespost(props){
   /* const mystyle = {
        width: "10px",
        height: "50px"
       
      };*/
    if(props.trigger){
        return(
            <div className="row">
           
                    <div >
                       
                    <div >
                    <img src={props.src} className="imgview" />
                    </div>
                    
                    </div>
              
            
            </div>
        )
    }
    
}

export default Imagespost;