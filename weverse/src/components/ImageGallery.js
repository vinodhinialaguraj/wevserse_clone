import './content.css'
function ImagesGallery(props){
   /* const mystyle = {
        width: "10px",
        height: "50px"
       
      };*/
    if(props.triggers){
        return(
            <div className="row">
           
                    <div >
                       
                    <div >
                    <img src={props.images} className="imageview" />
                    </div>
                    
                    </div>
              
            
            </div>
        )
    }
    
}

export default ImagesGallery;