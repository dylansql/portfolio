import './Tools.css'



export default function Tools() {




    return (
        <div className="toolbox">
            <div className="toolbox-holder">
                <div className="titlescreen">
                    <h1 id="title">What can I do?</h1>
                </div>
                <div className="skills">
                    <h1>Skills :</h1>
                    <ul>
                        <li>Node.js</li>
                        <li>Mongo DB</li>
                        <li>Postgresql</li>
                        <li>Git</li>
                        <li>Tailwind Library</li>
                        <li>Bootstrap</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div className="languages">
                    <h1>Languages :</h1>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Ruby</li>
                    </ul>
                </div>
                <div className="frameworks">
                    <h1>Frameworks: </h1>
                    <ul>
                        <li>React.js</li>
                        <li>Ruby on Rails</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
