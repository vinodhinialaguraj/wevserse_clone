import { useState } from "react";
import ImagesGallery from "./ImageGallery";

function PreviewMultipleImages(){

   const [images, setImages] = useState([]);

   const handleMultipleImages =(evnt)=>{
      const selectedFIles =[];
      const targetFiles =evnt.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImages(selectedFIles);
    }
    
return(
    <>
    <div className="form-group my-3 mx-3">
    <input type="file" onChange={handleMultipleImages} multiple/>
    </div>
      <ImagesGallery images={images} />
   </>
)
}
export default PreviewMultipleImages