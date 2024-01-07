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
      <p>I&apos;m <span>Bency Thomas</span> <br /> Software Engineer,<br /> Full Stack Development enthusiast </p>
    <a href=""> Contact Me</a>
    
    </div>
    <div>
      <img src='/img/me.JPG'></img>
    </div>

  </section>

  )
}

