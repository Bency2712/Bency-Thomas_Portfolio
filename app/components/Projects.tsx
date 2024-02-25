import { useState } from "react";
export default function Projects() {
    const [extraClasses2,setExtraClasses2] = useState('');
    return(
        
        <section id="projects">
        <div className="center">
            <h2>Projects</h2>
            <div className={extraClasses2 + "projects-container"}>
            <div className="project-box"><a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/nestquest.png" alt="" /> </a><span style={{fontSize: '22px'}}>NestQuest</span> <br/><span style={{color:'grey',fontSize: '17px'}}>An accomodation booking app</span> </div>
            <div className="project-box"><a href="https://weather-app-six-beryl.vercel.app/"><img src="/img/weather.png" alt="" /></a><span style={{fontSize: '22px'}}> Weather app</span><br/><span style={{color:'grey',fontSize: '17px'}}>Weather forecasting app</span></div>
            <div className="project-box"><a href="https://bency-thomas-pomodoro-timer.vercel.app/"><img src="/img/pomodoro.png" alt="" /></a><span style={{fontSize: '22px'}}>Pomodoro Timer</span><br/><span style={{color:'grey',fontSize: '17px'}}>Time management app</span></div>
            <div className="project-box"><a href="https://github.com/Bency2712/"><img src="/img/Splitsmart.png" alt="" /></a><span style={{fontSize: '22px'}}>Splitsmart</span><br/><span style={{color:'grey',fontSize: '17px'}}>An expense management app</span></div>
            <div className="project-box"><a href="https://github.com/Bency2712/Code-Smell-Detection-using-CNN"><img src="/img/codesmell.png" alt="" /></a><span style={{fontSize: '22px'}}>Code smell detection</span><br/><span style={{color:'grey',fontSize: '17px'}}>A CNN model to detect the code quality</span></div>
            <div className="project-box"><a href="https://github.com/Bency2712/"><img src="/img/nba.png" alt="" /></a><span style={{fontSize: '22px'}}>Data Analytics in NBA</span><br/><span style={{color:'grey',fontSize: '17px'}}>Database Systems Project on NBA games data</span></div>

        </div>
        </div>
        </section>
    );
}


