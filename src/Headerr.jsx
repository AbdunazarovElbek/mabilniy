
import rasm from './assets/img.png'
function Headerr() {
    return (
        <div className="header3 container">
            <div className='sozuchun'>
                <h4>About XBOX, PS</h4>
                <h1>The New Xbox, Ps
                Series</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</p>
                <button>Get Started Now</button>
            </div>
            <img src={rasm} alt="" />
        </div>
    )
}
export default Headerr