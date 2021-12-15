import './Colab.css'

// import { Link, Route, Routes } from 'react-router-dom'

export default function Colab() {


    return (
        <div className="main-container">
            <div className="box">
                <div className="title">
                    <h1>Colab</h1>
                </div>
                <div className="pics">
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_f89j7x.jpg" alt="co-lab-pictures" style={{height: "200px", width:"350px"}}/>
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_2_qzw9bv.jpg" alt="co-lab-pictures" style={{height: "200px", width:"350px"}}/>
                <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_3_rhkjku.jpg" alt="co-lab-pictures" style={{height: "200px", width:"350px"}}/>
                </div>
                <div className="summary-1">
                    <h1>Summary</h1>
                        <p> Using airtable, I created an api with enough seed data
                             to visualize the concept I had for co-lab. </p>
                        <p> Since I began the project I have learned new skills 
                            that will take this to the project to the next level.
                            Methods such as user authentification, user roles, and 
                            private messaging is which I plan on implementing very soon.</p>
                </div>
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
                    <h1>Stack Used</h1>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637166288/clipart4409582_mxnjse.png" alt="stack-logo" style={{height: "150px", width: "300px"}} />
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638987762/toppng.com-react-logo-396x134_h7anmj.png" alt="react-logo" style={{height: "120px", width:"300px"}}/>
            </div>
            <div className="work-links">
                <button><a href="https://co-labs.netlify.app/">Link to Site</a></button>
                <button><a href="https://github.com/dylansql">github</a></button>
            </div>
        </div>
    )
}
