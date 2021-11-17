import './Colab.css'

// import { Link, Route, Routes } from 'react-router-dom'


export default function Colab() {
    return (
        <div className="Main-Container">
            <div className="holder">
                <div className="title">
                    <h1>Co-lab</h1>
                </div>
                <div className="problem-sum">
                    <h1>Problem // Idea</h1>
                    <p> CoLab is a passion  project that I plan 
                        to expand on in the next coming months.
                        CoLab is a application that allows users to 
                        find their missing piece for whatever they are working on. Coming from a perspective
                         of Atlanta alone, It is difficult to excel in the music,
                          fashion, and business industry because of obvious degrees of 
                          gatekeeping. The goal is to be a one stop shop for any 
                          creator. Collab will do the does the following:</p>
                        <ul>
                            <li>Find local talent in relation to your skill level</li>
                            <li>In app transactions</li>
                            <li>In app service agreements</li>
                            <li>Social Platform management</li>
                        </ul>
                </div>
                <div className="Solution-Sum">
                    <h1>Solution</h1>
                    <p>Since I began the project I have learned new skills 
                            that will take this to the project to the next level.
                            Methods such as user authentification, user roles, and
                             private messaging is what I plan on adding soon.</p>
                </div>
                <div className="stack-sum">
                    <h1>Stack Used</h1>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637166288/clipart4409582_mxnjse.png" style={{height: "250px", width: "500px"}} />
                </div>
            </div>
            <div className="github">
            
            </div>
        </div>
    )
}
