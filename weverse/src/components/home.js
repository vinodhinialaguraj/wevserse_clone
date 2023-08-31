import Banner from './banner';
import Image from './image';
import Signup from './signup';
/*import Account from './account'
import Popup from './popup'*/
function home(){
   
    return(
        <div>
      
      <Signup/>
     <Banner/>
     <Image />
        </div>
    );
}
export default home;