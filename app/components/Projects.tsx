import { useState } from "react";
export default function Projects() {
    const [extraClasses,setExtraClasses] = useState('');
return(
   <section id="projects">
        <div className="center">
            <h2>Projects</h2>
            <div className="projects-container">
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
                <a href="https://nest-quest-accomodation-booking.vercel.app"><img src="/img/NestQuest.jpg" alt="" /></a>
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

 