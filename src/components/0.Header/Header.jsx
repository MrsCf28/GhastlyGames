import { Link } from 'react-router-dom';
import ghastly from '../../resources/Ghastly.png'
import '../../styling/Header.css'

export default function HeaderBar() {
    return (
        <section className='HeaderSection'>
            <Link to='/'><div className='sideButton'>Home</div></Link>
            <div className='title'>
            <img className='HeaderImage'
                src={ghastly}
                alt="Pokemon 192: Ghastly"
            ></img>
            <h1>Ghastly Games</h1>
            </div>
            <div className='sideButton'>Sign In</div>
        </section>
    );
}
