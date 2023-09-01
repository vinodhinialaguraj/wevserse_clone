import './content.css'
import {useState} from 'react';
import Postverse from './postinverse';
import Edit from './edit';
import ImagesGallery from "./ImageGallery";
function PostboxPopup(props){
    const [text, setText]= useState("");
    const [todos, setTodos] = useState([]);
    const [showpop, setShowpop]= useState(false);
    const [showimg, setshowimg]= useState(false);
    const [count, setCount] = useState(0);
    const compArr =[];
    //
    const [images, setImages] = useState(null);

    const handleMultipleImages =(e)=>{
       /* if(images===null){
            setshowimg(null);
            return
        }*/
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImages(URL.createObjectURL(selectedFile));
          }
          else {
            setImages(null); // Clear the selected image if no file is selected
          }
       //setImages(selectedFIles);
       setshowimg(true);
     }
     //
    const handletext=(e)=>{
      
        setText(e.target.value);
    }
    const handlepop=()=>{
        if(text.trim()===''){
            return;
        }
        if(images===null){
            setImages(null);
           // return
        }
        const newTodo = {
            id: count,
            text: text,
            image:images,
          };
         // console.log(todos.id);
      
          setTodos([...todos, newTodo]);
          setText('');
          setImages(null);
        setShowpop(true);
       // console.log(todos.length);
       setCount(count+1);
       props.setTrigger(false);
       setshowimg(false);
       
    }
    const handleX=()=>{
        props.setTrigger(false);
    }
    if(props.trigger){
        return(
            <div>
                <div>
                <div className="boxouter">
              
                    <div className="divouter">
                       
                        <button className="closebtn" onClick={handleX}>X</button>
                   <textarea  className="inputboxs" placehoder="write your post here" onChange={handletext}>
                   
                   </textarea>
                   <ImagesGallery images={images} triggers={showimg} setTriggers={setshowimg}/>
                   
                  
                <button type="submit" className="submitbtn" onClick={handlepop}>Add</button>
                <input type="file" onChange={handleMultipleImages} multiple/>
                    </div>                
                </div>
                
            </div>
           
           
           </div>
        )

        }
        for(let i=0;i<todos.length;i++){
           compArr.push( <Postverse id={todos[i].id} text={todos[i].text} image={todos[i].image} trigger={showpop} setTrigger={setShowpop} myObject={todos} setmyObject={setTodos}/>);
           console.log(todos[i].id);
        }
       
            return(
                <div className='idk'>
                    {compArr}
            </div>
            )
        
       
        
   
   
}
export default PostboxPopup;
