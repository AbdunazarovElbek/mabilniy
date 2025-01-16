
import img from './assets/character.png'
function Header(){
return(
    <header className='header container'>
        <div className='text'>
            <h4>Gaming Consoles</h4>
            <h1>Try It, Rent It, <br /> <b>Save $50!</b> </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</p>
            <button>Get Started Now</button>
        </div>
        <img src={img} alt="" />
    </header>
)
}

export default Header