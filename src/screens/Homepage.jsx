import React from 'react'
import background1 from '../assets/home/background-home-mobile.jpg'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
   <>   
   <main className='' style={{backgroundImage: background1}}>
    {/* <img className='h-full w-full bg-cover' src={background1} alt="" /> */}

      <section className='home grid grid-cols-1  place-items-center'>

        <div className="overlay p-10 text-white ">
          <h2 className='sub-heading text-center	text-transform: uppercase text-xl'>So, you want to travel to</h2>
          <h1 className='main text-center text-transform: uppercase text-9xl font-semibold'>Space</h1>
          <p className='mt-7 text-center'>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div >
          <button className='bg-white w-40 h-40 rounded-full text-transform: uppercase'>
            <Link to='/destination' >Explore</Link>
          </button>
        </div>
      </section>
   </main>
        
   </>
  )
}

export default Homepage