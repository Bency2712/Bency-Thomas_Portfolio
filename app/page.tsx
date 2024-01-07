"use client"; // This is a client component
import Image from 'next/image'
import Intro from "./components/Intro"
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function Home() {

  //when the index page renders, it should show intersection observer. It will observe the scrolling and when something shows up / will be observed, it will do something
  //when the skill section is on the screen, visible gets shown in inspect
  
  useEffect(()=> {
   
    const observer= new IntersectionObserver((entries: IntersectionObserverEntry[], Option)=>{
      entries.forEach(entry => {

        
        //for each entries, toggle the classlist and make it visible for entry is intersecting
        entry.target.classList.toggle('visible',entry.isIntersecting)
      })
    },{});
    const targetElement=document.querySelector('div.skills-container');
    if(targetElement)
    {observer.observe(targetElement);}
    
    //this is for all the sections
document.querySelectorAll('section').forEach(elem => {
  observer.observe(elem);
});
    return ()=> {
      observer.disconnect();
    };
    
  },[]);

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </main>
  )
}
