import React, { useState } from 'react'
const items = [
    {
      "name": "Moon",
      "images": {
        "png": require("../assets/destination/image-moon.png"),
        "webp": require("../assets/destination/image-moon.webp")
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": require("../assets/destination/image-mars.png"),
        "webp": "../assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": require("../assets/destination/image-europa.png"),
        "webp": "../assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": require("../assets/destination/image-titan.png"),
        "webp": "../assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]


const Destination = () => {
    const [destinations] = useState(items)
    const [planetIndex, setPlanetIndex] = useState(3)
    const {name, images, description, distance, travel} = destinations[planetIndex]
  return (
    <>
        <section className=' text-white destination grid grid-cols-1 place-items-center lg:grid-cols-2 '>
            <div className=''>
                <h2 className='mt-7 font-Barlow sub-heading text-center font-medium text-transform: uppercase text-xl [word-spacing:0.30rem]'>
                <span className='text-gray-500 font-semibold mr-5'>01</span>
                Pick Your Destination</h2>
                <img className='w-52 m-auto mt-7 md:w-3/5 lg:w-full ' src= {images.png} alt={images.name} />
            </div>

            <div className='mt-3 grid grid-cols-1 place-items-center'>
                <div className=' Toggle flex gap-6'>
                    <button className='bt hover:border-b-2 '  onClick={() => setPlanetIndex(0)}> <h1 className='text-gray-400 font-medium font-Barlow text-transform: uppercase text-md'>Moon</h1></button>
                    <button className='bt hover:border-b-2' onClick={() => setPlanetIndex(1)}> <h1 className='text-gray-400 font-medium font-Barlow text-transform: uppercase text-md'>Mars</h1></button>
                    <button className='bt hover:border-b-2' onClick={() => setPlanetIndex(2)}> <h1 className='text-gray-400 font-medium font-Barlow text-transform: uppercase text-md'>Europa</h1></button>
                    <button className='bt hover:border-b-2' onClick={() => setPlanetIndex(3)}> <h1 className='text-gray-400 font-medium font-Barlow text-transform: uppercase text-md'>Titan</h1></button>
                </div>

                <div>
                    <h1 className='font-Bellefair main text-center text-transform: uppercase text-5xl mt-6 '>{name}</h1>
                    <p className='text-gray-400 font-Barlow m-5 p-6 text-center border-b-2 border-gray-400'>{description}</p>
                </div>

                <div className='grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 md:gap-52 lg:gap-40'>
                    <div>
                        <h2 className='text-gray-400 font-Barlow sub-heading text-center text-transform: uppercase text-md [word-spacing:0.20rem]'>Avg. Distance</h2>
                        <p className='mt-2 text-white font-Bellefair text-transform: uppercase text-center text-3xl'>{distance}</p>
                    </div>

                    <div>
                        <h2 className=' text-gray-400 font-Barlow sub-heading text-center text-transform: uppercase text-md [word-spacing:0.20rem]'>est. travel time</h2>
                        <p className='mt-2 text-white font-Bellefair text-transform: uppercase text-center text-3xl'>{travel}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Destination