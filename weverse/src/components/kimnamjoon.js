import './home.css'
import {useNavigate} from "react-router-dom";
function Images(){
    const navigate = useNavigate();
    const handleimg=()=>{
        navigate('/feed');
    }
    return(
        <div>
             <div className="container">
              <div className="item" onClick={handleimg}>
            <img src="https://i.pinimg.com/1200x/33/17/a1/3317a168f29e39e4ec2376c4da9c773d.jpg"/>
        <h3 className="name">Kim Namjoon</h3>    
        </div>
        <div className="item" onClick={handleimg}>
                <img src="https://w0.peakpx.com/wallpaper/286/766/HD-wallpaper-bts-j-hope.jpg"/>
           <h3 className="name">Jung hoseok</h3>
            </div>
            <div className="item" onClick={handleimg}>
                <img src="https://e0.pxfuel.com/wallpapers/586/33/desktop-wallpaper-bts-black-and-white-bts-jin-black.jpg"/>
            <h3 className="name">Kim Seokjin</h3>
            </div>
            <div className="item" onClick={handleimg}>
                <img src="https://i.pinimg.com/originals/0a/03/50/0a0350392f5f51b9b95807b9a28bf737.png"/>
            <h3 className="name">Min Yoongi</h3>
            </div>
           <div className="item" onClick={handleimg}>
            <img src="https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/1280x1280/products/5764/13682/05-BTS_Dicon_Dfesta_JIMIN__02561.1656911864.jpg?c=2?imbypass=on"/>
        <h3 className="name">Park Jimin</h3>   
        </div>
            <div className="item" onClick={handleimg}>
                <img src="https://i.pinimg.com/236x/78/d9/9d/78d99d62058cf14fd70bbce63ee0ab59.jpg"/>
            <h3 className="name">Kim Taehyung</h3>
            </div>
            <div className="item" onClick={handleimg}>
                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/p/q/h/medium-pefkt14764-hd-jungkook-bangtan-boys-bangtan-sonyeondan-original-imagg8r8gtfscyet.jpeg?q=20"/>
            <h3 className="name">Jeon Jungkook</h3>
            </div>
            
            <div className="item" onClick={handleimg}>
            <img src="https://w0.peakpx.com/wallpaper/101/755/HD-wallpaper-bts-black-black-and-white-boyband-bts-korean-dark-korean-kpop-singer-song-thumbnail.jpg"/>
        <h3 className="name">BTS</h3>
        </div>
        </div>
        </div>
    );
}
export default Images;