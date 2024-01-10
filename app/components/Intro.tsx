"use client"; // This is a client component
import { useEffect, useState } from "react"

export default function Intro(){
//in the beginning the classname should be empty, but when the section is rendered it should get a value, hence we will use useSstate
const [classes, setClasses]= useState('');

////the intro section gets rendered whenever user views the intro section
  useEffect(()=>{
    setClasses('visible');
  },[]);
    return (
    <section id="intro" className={classes}>
    <div>
    {/*to use apostrophe, we can use &apos;*/}
      <p>I&apos;m <span>Bency Thomas</span> <br /> a Software Engineer,<br />with a keen interest in Full Stack Development.</p>
    <a href="#contact"> Contact Me</a>
    
    </div>
    <div>
      <img src='/img/me2.JPG'></img>
    </div>

  </section>

  )
}

