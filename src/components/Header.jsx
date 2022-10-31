import ghastly from '../resources/Ghastly.png'

export default function Header() {
    return (
        <section className='HeaderSection'>
            <img className='HeaderImage'
                src={ghastly}
                alt="Pokemon 192: Ghastly"
            ></img>
            <h1>Ghastly Games</h1>
        </section>
    );
}
