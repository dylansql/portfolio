import './portfolio.css'

export default function Portfolio() {
    return (
        <div className="main-container">
            <div className="box">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="prev-pics">
                    <div id="nightly-pic-1" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1644335607/Projects_pvyg5e.png" alt="nightly-screenshot" style={{height: "200px", width:"350px"}}/>
                    </div>
                    <div id="nightly-pic-2" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1644335627/Hi._Im_Dylan_htxcch.png" alt="nightly-screenshot" style={{height: "200px", width:"350px"}}/>
                    </div>
                    <div id="nightly-pic-3" className="pic">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1644335620/About_Me_xbhikt.png" alt="nightly-screenshot" style={{height: "200px", width:"350px"}}/>
                    </div>
                    </div>
                <div className="summary">
                    <h1>Summary</h1>
                    <p> This portfolio highlights a few projects that I found to be very pivotal in my development career. 
                        {/* </p>
                        <h2>Team Role</h2>
                        <p>In this team project, My role included the following: 
                        <ul>
                            <li>Assiting in Backend Development and Configuration using mongo DB</li>
                            <li>Curating the Landing</li>
                            <li>Listing page</li>
                            <li>Assisted in project management ensuring the team was hitting their goals each day</li>
                        </ul> */}
                        </p>
                </div>
                <div className="stack-sum">
                    <h1>Stack Used</h1>
                    <div className="site-button">
                        <ul>
                        <li>Deployed via Netflify</li>
                        <li>React Frontend</li>
                        <li>BootStrap</li>
                        </ul>
                    </div>
                    {/* <div className="top-pics">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1639145148/pngwing.com_do2dyw.png" alt="stack-screenshot" style={{height: "200px", width:"200px"}}/>
                        
                        <img src="https://download.logo.wine/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.png" alt="stack-screenshot" style={{height: "200px", width:"300px"}}/>
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638987762/toppng.com-react-logo-396x134_h7anmj.png" alt="tech-screenshot" style={{height: "150px", width:"350px"}}/>
                    </div> */}
                        <div className='work-link'>
                            <button id="btn"><a href="https://dylansql.netlify.app/" target='_blank' >site</a></button>
                            <button id="btn"><a href="https://github.com/dylansql/portfolio" target='_blank'>github</a></button>
                        </div>
                </div>
            </div>
        </div>
    )
}