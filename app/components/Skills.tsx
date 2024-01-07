import { useState } from "react";
export default function Skills() {
    const [extraClasses,setExtraClasses] = useState('');
    return(
        
        <section id="skills">
        <div className="center">
            <h2>My Skills</h2>
            <div className={extraClasses + "skills-container"}>
            <div className="skill-box"><img src="/img/java.png" alt="" /><span>Java</span></div>
            <div className="skill-box"><img src="/img/js.png" alt="" /><span>Javascript</span></div>
            <div className="skill-box"><img src="/img/html.png" alt="" /><span>HTML</span></div>
            <div className="skill-box"><img src="/img/css-3.png" alt="" /><span>CSS</span></div>
            <div className="skill-box"><img src="/img/server.png" alt="" /><span>SQL</span></div>
            <div className="skill-box"><img src="/img/mongodb.png" alt="" /><span>MongoDB</span></div>
            <div className="skill-box"><img src="/img/react.png" alt="" /><span>React</span></div>
            <div className="skill-box"><img src="/img/node.png" alt="" /><span>Node</span></div>
            <div className="skill-box"><img src="/img/expressjs.png" alt="" /><span>Express</span></div>
        </div>
        </div>
        </section>
    );
}