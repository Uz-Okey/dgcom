import React, { useEffect, useRef, useState } from 'react'
import about from '../img/about.jpg'
import team from '../img/team-1.jpg'
import '../css/Section3.css';


const Section3 = () => {
  const [article1, setArticle1] = useState(false);
  const [article2, setArticle2] = useState(false);
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setArticle1(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.2
      }
    )

    if (article1Ref.current) {
      observer.observe(article1Ref.current)
    }

    return () => {
      if (article1Ref.current) {
        observer.unobserve(article1Ref.current)
      }
    }
  }, [])

  useEffect(() => {
   const observer = new IntersectionObserver(
      ([entry]) => {
        setArticle2(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.2
      }
    )

    if (article2Ref.current) {
      observer.observe(article2Ref.current)
    }

    return () => {
      if (article2Ref.current) {
        observer.unobserve(article2Ref.current)
      }
    }
  }, [])
  return (
    <section
      className='section3'>
      <article
        ref={article1Ref}
        className={`section3-article-container ${article1 ? 'show' : 'hide'}`}>

        <div className='border'></div>
        <div
          className='section3-img'
        >
          <img src={about} alt="" />
        </div>


      </article>
      <article
        ref={article2Ref}
        className={`section3-article-content2 ${article2 ? 'show' : 'hide'}`}>
        <div className="section3-header1">
          <h3>
            ABOUT US
          </h3>
          <div>
            <div className="length1"></div>
            <div className="length2"></div>
          </div>

        </div>

        <div className="section3-header2">
          <h1 className="section3-h1">
            #1 Digital Solution With <span>10 Years</span>
            Of Experience
          </h1>
        </div>
        <div className="section3-content1">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia
            reprehenderit illum doloribus eveniet! Architecto labore, laudantium ex
          </p>
          <p>
            cupiditate, eum voluptatibus nesciunt sunt dolor amet ducimus velit eligendi dignissimos odit.
          </p>

        </div>
        <div
          className='section3-content2'
        >
          <img className='section3-content2-img' src={team} alt="" />
          <div className='section3-content2-text'>
            <h1>JHON DOE</h1>
            <p>SEO and FOUNDER</p>
          </div>


        </div>
        <button>
          Read More
        </button>

      </article>
    </section>
  )
}

export default Section3
