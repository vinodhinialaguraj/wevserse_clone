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
  const handleEditclose=()=>{
    props.setTrigger(false);
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
    else {
      setImg(null); // Clear the selected image if no file is selected
    }
  }
  if(props.trigger){
    return(
      <div>
        <div className="editbox">
          <button onClick={()=>handleEditclose()} className='closeEdit'>X</button>
        <textarea onChange={(e)=>handleedit(e)} className="editor">{items}</textarea>
        
        <button onClick={()=>handleSubmit(props.id)} className="addbtnsub">button</button>
       
        <input type="file" onChange={handleMultipleImages} multiple/>
        </div>
     
     
      </div>
    )
    
   
  }
 
}

export default Edit;



