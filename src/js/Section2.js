import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faPeopleGroup, faBolt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import '../css/Section2.css';
const Section2 = () => {
const [section, setSection] = useState(false);
const sectRef = useRef(null);

useEffect(()=>{
const observer = new IntersectionObserver(
  ([entry])=>{
    setSection(entry.isIntersecting)
  },
  {
    root: null,
    threshold: 0.2,
  }
)

if(sectRef.current){
  observer.observe(sectRef.current)
}

return ()=>{
  if (sectRef.current) {
    observer.unobserve(sectRef.current)
  }
  
}
},[])

  return (
    <section
    ref={sectRef}
      className={`section22 ${section ? 'show': 'hide'}`}
    >
      <article
        className='section2-aricle3-container'
      >
        <div className='section2-article3-content'>
          <FontAwesomeIcon icon={faSun} />
          <div className="section2-article3-text">
            <p>
              Years Experience
            </p>
            <h1>1234</h1>
          </div>
        </div>
        <div className='section2-article3-content'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <div className="section2-article3-text">
            <p>
              Team Members
            </p>
            <h1>1234</h1>
          </div>
        </div>
        <div className='section2-article3-content'>
          <FontAwesomeIcon icon={faBolt} />
          <div className="section2-article3-text">
            <p>
              Satisfied Clients
            </p>
            <h1>1234</h1>
          </div>
        </div>
        <div className='section2-article3-content'>
          <FontAwesomeIcon icon={faUser} />
          <div className="section2-article3-text">
            <p>
              Project Done
            </p>
            <h1>1234</h1>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Section2