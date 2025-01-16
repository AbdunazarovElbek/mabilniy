import logo from './assets/image.png'
import fase from './assets/image copy.png'
import tvit from './assets/image copy 2.png'
import insta from './assets/image copy 3.png'
function Footer(){
return(
    <footer className='container'>
        <img src={logo} alt="" />
        <p>Copyright © 2022 HEALAS.LT. All Rights Reserved.</p>
        <div>
            <img src={fase} alt="" />
            <img src={tvit} alt="" />
            <img src={insta} alt="" />
        </div>
    </footer>
)
}

export default Footer