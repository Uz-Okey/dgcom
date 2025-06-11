import React from 'react';
import carousel1 from '../img/carousel-2.jpg';
import carousel2 from '../img/carousel-1.jpg';
import { useEffect, useState, useRef } from 'react'
import '../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [scrollX, setScrollX] = useState(0)
  const array = [
    {
      id: 1,
      textP: 'WE ARE LEADER IN',
      textH1: 'Creative & Innovative Digital Solution',
      img: carousel1
    },
    {
      id: 2,
      textP: 'GREAT LEADERS ARE BORN',
      textH1: 'Creative & Innovative Digital Solution',
      img: carousel2
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => (prev + 1) % array.length);
    }, 7000);
    return () => { clearInterval(interval) }
  }, []);

  function handleRightClick() {
    setScrollX((prev) => (prev + 1) % array.length)
  }

  function handleLeftClick() {
    setScrollX((prev) => (prev - 1 + array.length) % array.length)
  }


  return (
    <section className="section2">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${scrollX * 100}%)` }}
        >
          {array.map((item) => (
            <div className="carousel-slide" key={item.id}>
              <div className="carousel-bckgrou"></div>
              <img src={item.img} alt="" />
              <div className="carousel-text">
                <p>{item.textP}</p>
                <h1>{item.textH1}</h1>
                <button
                  className='arrow-left-icon'
                  onClick={handleLeftClick}
                ><FontAwesomeIcon icon={faArrowLeft} /></button>

                <button
                  className='arrow-right-icon'
                  onClick={handleRightClick}
                ><FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Home