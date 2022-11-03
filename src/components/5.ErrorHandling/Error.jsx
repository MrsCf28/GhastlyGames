import shellder from '../../resources/ShinyShellder90.png'

export default function Error(code, msg, status, statusText) {

    return(
        <section className='ErrorHandler'>
            <h2>Oops! Something went wrong</h2>
            <p>Code: {code}</p>
            <p>Error Message: {msg}</p>
            <p>Error status: {status}</p>
            <p>Error status text: {statusText}</p>
            <h3>Hopefully this shiny shellder will make up for it!</h3>
            <img className='ErrorImage'
                src={shellder}
                alt="Pokemon 90: Shellder, shiny version, orange not purple"
            ></img>
        </section>
    )

}