import './SampleRewind.css'
// import { Link } from 'react-router-dom'


export default function SampleRewind() {


    return (
        <div className="box-1">
            <div className="box-2">
                <div className="RRtitle">
                    <h1>RECENT RECORDS</h1>
                </div>
                    <div className="preview-pics">
                        <div id="pic-1" className="RRpic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966129/RECENT_RECORDS_ASSETS_ib3fkn.jpg" alt="recentrec-screenshot" style={{height: "200px", width:"300px"}}/>
                        </div>
                        <div id="pic-2"className="RRpic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966120/RECENT_RECORDS_mkopyd.jpg" alt="recentrec-screenshot" style={{height: "200px", width:"300px"}}/>
                        </div>
                        <div id="pic-3" className="RRpic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638966145/RECENT_RECORDS_ASSETS_2_wtaf1c.jpg" alt="recentrec-screenshot" style={{height: "200px", width:"300px"}}/>
                        </div>
                    </div>
                    <div className="RRsummary">
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
                <div className="RR-stack-sum">
                        <h1>Stack Used</h1>
                </div>
                    <div className="stack-group-pics">
                        <div className="stack-pic">
                            <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167005/clipart1657333_yldaee.png" alt="recentrec-stack" style={{height: "200px", width:"200px"}}/>
                        </div>
                        <div className="stack-pic">
                            <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167107/javascript-icon-png-13_fstq0e.png" alt="recentrec-stack" style={{height: "200px", width:"200px"}}/>
                        </div>
                        <div className="stack-pic">
                            <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637166901/clipart2022336_th8oo2.png" alt="recentrec-stack" style={{height: "200px", width:"200px"}}/>
                        </div>
                        <ul>
                            <li>HTML</li>
                            <li>JAVASCRIPT</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="work-link">
                        <button id="btn"><a href="https://dylansql.github.io/Recent-Records/">site</a></button>
                        <button id="btn"><a href="https://github.com/dylansql/Recent-Records">github</a></button>
                    </div>
            </div>
        </div>
    )
}
