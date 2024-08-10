import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
   <>   
   <main>
    {/* <img className='h-full w-full bg-cover' src={background1} alt="" /> */}

      <section className='home grid grid-cols-1  place-items-center'>

        <div className="overlay p-10 text-white ">
          <h2 className='font-Barlow sub-heading text-center	text-transform: uppercase text-xl [word-spacing:0.25rem]'>
            So, you want to travel to</h2>

          <h1 className='font-Bellefair main text-center text-transform: uppercase text-9xl mt-5 '>Space</h1>

          <p className='font-Barlow mt-7 text-center '>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div >
          <button className='font-Bellefair bg-white w-40 h-40 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
        </div>
      </section>
   </main>
        
   </>
  )
}

export default Homepage