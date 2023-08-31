import './content.css';
import Edit from'./edit';
import PostboxPopup from './postboxpopup';
import { useState} from 'react';

function Postinverse(props){
    const [txt, setTxt]= useState(false);
    const items = props.myObject;
    const txtsedit= props.text;
   const image = props.image;
  // console.log(image);
    const[fullword, setFullword]=useState(txtsedit);
    const [img, setimg]= useState(null);
    const setobj= props.setmyObject;
    const id = props.id;
    const getData=(data, img)=>{
      setFullword(data);
      setimg(img);
    }

    const deleteTodo = (id) => {
       // console.log("update called me")
        const updatedItems = items.filter(item => item.id !== id);  
        props.setmyObject(updatedItems) ;

      };
      const editTodo = (id) => {
        //console.log({editedText});
      //  const updatedItems = items.map((todo) =>
      //  todo.id === id ? { ...todo, text: fullword } : todo
     // );
        //props.setmyObject(updatedItems)
      //setValue(updatedItems)
        setTxt(true);
        
      };
     /* const updateimg=(id)=>{
        const updatedItemsimg = items.map((todo) =>
        todo.id === id ? { ...todo, image: img } : todo

      );
      props.setmyObject(updatedItemsimg) ;
      }*/
      const updateonclick=(id)=>{
     //   updateimg(id);
        if(fullword.trim()===''){
         return;
        }
          const updatedItems = items.map((todo) =>
        todo.id === id ? { ...todo, 
          text: fullword,
        image: img } : todo
      );
      
      props.setmyObject(updatedItems)
       
   
        //console.log(value);
      
      }
      
 if(props.trigger){

 console.log("idk wats happenin");
        return(
            <div >
                <Edit trigger={txt} setTrigger={setTxt} onSubmit={getData} texts={txtsedit}  />
                <div className='postverse'>
                  <div className='postversebtn'>
                 <li key={props.id}>
            <button onClick={()=>editTodo(props.id)}>edit</button>
           
            <button onClick={()=>updateonclick(props.id)}>update</button>
            
            <button onClick={()=>deleteTodo(props.id)}>delete</button>
            </li>
            </div>
            
           
           <div className='posting'>
            {props.text}
           </div>
           <img src={props.image} className="imageview" />
           </div>
           </div>
        
       )
        }
        console.log("idk y its not going into if");
       //console.log(props.trigger);
 
 

}
export default Postinverse;