import { useState } from "react";
export default function Projects() {
    const [extraClasses,setExtraClasses] = useState('');
return(
   <section id="projects">
        <div className="center">
            <h2>Projects</h2>
            <div className="projects-container">
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /> <br /> NestQuest</a>
                <a href="https://github.com/Bency2712/"><img src="/img/splitsmart.png" alt="" /> <br /> Splitsmart</a>
                <a href="https://github.com/Bency2712/Code-Smell-Detection-using-CNN"><img src="/img/code_smell_detection.png" alt="" /> <br /> Code smell detection</a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/nba.png" alt="" /> <br /> Data Analytics in NBA</a>
                <a href="https://github.com/Bency2712/"><img src="/img/weather.png" alt="" /> <br /> Weather app</a>
                <a href="https://github.com/Bency2712/"><img src="/img/pomodoro.png" alt="" /> <br /> Pomodoro Timer</a>
            </div>
        </div>
        
    </section>
)
}


/*
<section id="projects">
<div className="center">
    <h2>Projects</h2>
            <div className={extraClasses + "projects-container"}>
            <div className="projects-box">
                <a href="https://nest-quest-accomodation-booking.vercel.app">
                    <img src="/img/NestQuest.jpg" alt="" /></a><span>NestQuest<span><h5>An Accomodation booking app</h5></span>
                    </span>
            </div>
            
            <div className="projects-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a><span>Java</span></div>
            <div className="projects-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a><span>Java</span></div>
            <div className="projects-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a><span>Java</span></div>
            <div className="projects-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a><span>Java</span></div>
            <div className="projects-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a><span>Java</span></div>    
        </div>
        </div>
        </section>
)}


*/

 