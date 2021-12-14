import './Landing.css'
import Typewriter from 'typewriter-effect'
import bootstrap from 'bootstrap'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div className="Landing">
            <div>
            <div className="intro-page">
                <h1>Hi. Im Dylan!</h1>
                <h1>Full Stack Engineer</h1>
                <h1>A little About Me: </h1>
                <p class="h1">
                <Typewriter 
                className="typer"
                onInit={(Typewriter) => {
                    Typewriter.typeString("Full Stack Engineer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Musician")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Web-Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Artist")
                    .pauseFor(8000)
                    .deleteAll()
                    .start()
                }}
                />
                </p>
            </div>
                <div className='links'>
                    <Link to="/work">
                    <button type="button" class="btn btn-danger" style={{background: "#D55534"}}>my work</button>
                    </Link>
                    <a href="https://github.com/dylansql">
                    <button type="button" class="btn btn-danger" style={{background: "#D55534"}}>github</button>
                    </a>
                    <a href="https://twitter.com/dylansqll">
                    <button type="button" class="btn btn-danger" style={{background: "#D55534"}}>social</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
