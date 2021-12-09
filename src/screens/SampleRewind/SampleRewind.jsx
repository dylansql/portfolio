import './SampleRewind.css'
// import { Link } from 'react-router-dom'


export default function SampleRewind() {


    return (
        <div className="main-container">
            <div className="box">
                <div className="title">
                    <h1>RECENT RECORDS</h1>
                </div>
                    <div className="site-pics">
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966129/RECENT_RECORDS_ASSETS_ib3fkn.jpg" style={{height: "200px", width:"300px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966120/RECENT_RECORDS_mkopyd.jpg" style={{height: "200px", width:"300px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966145/RECENT_RECORDS_ASSETS_2_wtaf1c.jpg" style={{height: "200px", width:"300px"}}/>
                    </div>
                <div className="summary">
                    <h1>Summary</h1>
                    <p> RECENT RECORDS is a simple application that 
                        allows users to type in their favorite artists 
                        and see a carousel of all of their most recent 
                        albums. I completed this application using pure 
                        HTML, CSS, and Javascript. </p>  
                </div>
                {/* <div className="Solution-Sum">
                    <h1>Solution</h1>
                    <p>Summary</p>
                </div> */}
                <div className="stack-sum">
                    <h1>Stack Used</h1>
                    <div className="pics">
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167005/clipart1657333_yldaee.png" style={{height: "200px", width:"200px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167107/javascript-icon-png-13_fstq0e.png" style={{height: "200px", width:"200px"}}/>
                    <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637166901/clipart2022336_th8oo2.png" style={{height: "200px", width:"200px"}}/>
                    </div>
                    <ul>
                        <li>HTML</li>
                        <li>JAVASCRIPT</li>
                        <li>CSS</li>
                    </ul>
                    <div className="site-button">
                        <button><a href="https://dylansql.github.io/Recent-Records/">Link to Site</a></button>
                    </div>

                </div>
            </div>
        </div>
    )
}
