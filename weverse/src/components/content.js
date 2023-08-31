import Account from './account';
import Navbar from './nav';
import Fansearch from './fanspost';
import Postverse from './postinverse';
import Btsbanner from './bts';
function content(){
    return(
        <div>
            <Account/>
            <Navbar/>
            <Btsbanner/>
            <Fansearch/>
            <Postverse/>
            
        </div>
    )
}
export default content;