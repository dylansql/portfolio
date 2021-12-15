import './Docks.css'

export default function Docks() {


    return (
        <div className="mainn-container">
            <div className="boxx">
                <div className="titlee">
                    <h1>The Docks</h1>
                </div>
                    <div className="prev-picss">
                        <div className='pic'>
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_f89j7x.jpg" style={{height: "200px", width:"350px"}}/>
                        </div>
                        <div className='pic'>
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_2_qzw9bv.jpg" style={{height: "200px", width:"350px"}}/>
                        </div>
                        <div className='pic'>
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638984194/The_Docks_Assets_3_rhkjku.jpg" style={{height: "200px", width:"350px"}}/>
                        </div>
                    </div>
                <div className="Doc-summ">
                    <h1>Summary</h1>
                    <p> The Docks is an application that aimed 
                        to let people perform peer to peer renting. 
                        This application allows users to take items 
                        they do not use in the house and start an 
                        online market where they are.</p>
                        <h2>Team Role</h2>
                        <p>In this team project, My role included the following: 
                        <ul>
                            <li>Assiting in Backend Development and Configuration using mongo DB</li>
                            <li>Curating the Landing</li>
                            <li>Listing page</li>
                            <li>Assisted in project management ensuring the team was hitting their goals each day</li>
                        </ul>
                        </p>
                    </div>
                <div className="Doc-stack-sum">
                    <h1>Stack Used</h1>
                    <div className="stacks">
                        <div className="stack">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167417/pngegg_xd7333.png" style={{height: "100px", width:"350px"}}/>
                        </div>
                        <div className="stack">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" style={{height: "100px", width:"375px"}}/>
                        </div>
                        <div className="stack">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1638987762/toppng.com-react-logo-396x134_h7anmj.png" style={{height: "100px", width:"300px"}}/>
                        </div>
                        <div className="stack">
                        <img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1637167264/kisspng-web-development-node-js-javascript-software-develo-node-js-icon-5b4aff47d622e1.0467371515316416718771_ottt8t.png" style={{height: "125px", width:"125px"}}/>
                        </div>
                    </div>
                    <div className="works-link">
                        <button id="btn"><a href="https://thedocks.netlify.app">site</a></button>
                        <button id="btn"><a href="https://github.com/dylansql/The-Dock">github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
