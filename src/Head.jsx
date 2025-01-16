import img from './assets/illutration.png'

function Head() {
    return (
        <header className="header2 container">
            <img src={img} alt="" />
            <div className='soz'>
                <h4>About VR Glasses</h4>
                <h1>The New VR Glasses
                Series</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</p>
                <button>Get Started Now</button>
            </div>
        </header>
    )
}
export default Head
 