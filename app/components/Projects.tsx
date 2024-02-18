import { useState } from "react";
export default function Projects() {
    const [extraClasses2,setExtraClasses2] = useState('');
    return(
        
        <section id="projects">
        <div className="center">
            <h2>Projects</h2>
            <div className={extraClasses2 + "projects-container"}>
            <div className="project-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/nestquest.png" alt="" /> </a><span>NestQuest</span></div>
            <div className="project-box"><a href="https://github.com/Bency2712/"><img src="/img/splitsmart.png" alt="" /></a><span>Splitsmart</span></div>
            <div className="project-box"><a href="https://github.com/Bency2712/Code-Smell-Detection-using-CNN"><img src="/img/code_smell_detection.png" alt="" /></a><span>Code smell detection</span></div>
            <div className="project-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/nba.png" alt="" /></a><span>Data Analytics in NBA</span></div>
            <div className="project-box"><a href="https://weather-app-six-beryl.vercel.app/"><img src="/img/weather.png" alt="" /></a><span> Weather app</span></div>
            <div className="project-box"><a href="https://bency-thomas-pomodoro-timer.vercel.app/"><img src="/img/pomodoro.png" alt="" /></a><span>Pomodoro Timer</span></div>
        </div>
        </div>
        </section>
    );
}


