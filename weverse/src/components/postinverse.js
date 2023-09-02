import './content.css';
import Edit from'./edit';
//import Imagespost from './postingpic';
import { useState} from 'react';

function Postinverse(props){
    const [txt, setTxt]= useState(false);
    const items = props.myObject;
    const txtsedit= props.text;
   const image = props.image;
  // console.log(image);
    const[fullword, setFullword]=useState(txtsedit);
    const [img, setimg]= useState(image);
    const images= props.image;
    const id = props.id;
    //const [showpost , setShowpost]= useState(false);  
    const getimg=(img)=>{
      console.log("img")
     console.log(img);
   // setShowpost(true);
     setimg(img);
    }
    
    const getData=(data)=>{
      setFullword(data);
     
    
     
    /*  if(fullword.trim()===''){
        return;
       }
      
         const updatedItems = items.map((todo) =>
       todo.id === id ? { ...todo, 
         text: fullword,
       image: img } : todo
     );
     
     props.setmyObject(updatedItems)*/
      
  
    }

    const deleteTodo = (id) => {
       // console.log("update called me")
        const updatedItems = items.filter(item => item.id !== id);  
        props.setmyObject(updatedItems) ;

      };
      const editTodo = (id) => {
       
        setTxt(true);
        
      };
   
      const updateonclick=(id)=>{
     //   updateimg(id);
        if(fullword.trim()===''){
         return;
        }
       
          const updatedItems = items.map((todo) =>
        todo.id === id ? { ...todo, 
          text: fullword,
          image: img, } : todo
      );
      
      props.setmyObject(updatedItems)
       
   
        //console.log(value);
      
      }
     
 if(props.trigger){

 console.log("idk wats happenin");
        return(
            <div >
                <Edit trigger={txt} setTrigger={setTxt} onSubmit={getData} texts={txtsedit} id={id} getImg={getimg}  />
                <div className='postverse'>
                  <div className='postversebtn'>
                 <li key={props.id}>
            <button onClick={()=>editTodo(props.id)}>edit</button>
           
           <button onClick={()=>updateonclick(props.id)}>update</button>
            
            <button onClick={()=>deleteTodo(props.id)}>delete</button>
            </li>
            </div>
            
           
           <div className='posting'>
            {fullword}
           </div>
           {img && (
          <img src={props.image} className='imgview' />
        )}
           </div>
           </div>
        
       )
        }
        console.log("idk y its not going into if");
       //console.log(props.trigger);
 
 

}
export default Postinverse;