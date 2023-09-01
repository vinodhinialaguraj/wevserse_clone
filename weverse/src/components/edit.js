import {useState, createContext, useContext} from 'react';
import './content.css'
import ImagesGallery from './ImageGallery';
function Edit(props){
 
  const[word, setWord]=useState("");

  const[img, setImg]=useState(null);
  const items= props.texts;
  const handleedit=(e)=>{
    setWord(e.target.value);
    console.log(word);
    //props.onSubmit(word);
  }
  
 const handleSubmit=(id)=>{
 
  props.setTrigger(false);
  if(word.trim()!==''){
    props.onSubmit(word);
  }
 
  if(img!==null){
    props.getImg(img);
  }
 
 
 }
 const handleMultipleImages =(e)=>{
  const selectedFile = e.target.files[0];
  if (selectedFile) {
      setImg(URL.createObjectURL(selectedFile));
    }
  }
  if(props.trigger){
    return(
      <div>
        <div className="editbox">
        <textarea onChange={(e)=>handleedit(e)} className="editor">{items}</textarea>
        
        <button onClick={()=>handleSubmit(props.id)} className="addbtnsub">button</button>
       
        <input type="file" onChange={handleMultipleImages} multiple/>
        </div>
     
     
      </div>
    )
    
   
  }
 
}

export default Edit;



