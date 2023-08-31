import Navbar from './nav';
import Account from './account'
import Images from './kimnamjoon'
import Btsbanner from './bts';
function Artistpage(){
    return (
        <div>
          <Account/>
          <Navbar/>
        <Btsbanner/>
     <Images/>  
        </div>
    )
}
export default Artistpage;
