import { useState } from "react";
export default function Projects2() {
    const [extraClasses,setExtraClasses] = useState('');
return(
   <section id="projects2">
        <div className="center">
            <h2>projects2</h2>
            <div className="projects2-container">
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
