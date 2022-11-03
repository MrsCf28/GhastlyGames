import shellder from '../../resources/ShinyShellder90new.png'
import '../../styling/Error.css'

export default function ErrorHandler(props) {
    const {code="ERR_BAD_REQUEST", msg="route not found", status=404, statusText="Not Found"} = props

    return(
        <section className='ErrorHandler'>
            <h2>Oops!</h2><h2>Something went wrong</h2>
            <div className='ErrorMessages'>
            <p>Code: {code}</p>
            <p>Error Message: {msg}</p>
            <p>Error status: {status}</p>
            <p>Error status text: {statusText}</p>
            </div>
            <h3>Hopefully this shiny shellder will make up for it!</h3>
            <img className='ErrorImage'
                src={shellder}
                alt="Pokemon 90: Shellder, shiny version, orange not purple"
            ></img>
        </section>
    )

}