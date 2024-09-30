import React from 'react'
import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <>
        <header className='w-full absolute z-10 flex justify-center items-center'>
          <div>
            <Link to="/">
              <img className='absolute left-7 top-7' src={logo} alt="" />
            </Link>
          </div>

          <img className='absolute right-5 top-5 md:hidden' src={menu} alt="" />

          <div>
            <nav className='navigation p-7 mt-3 absolute right-0 top-0 w-10/12 hidden md:flex justify-center items-center'>
              <ul className='flex gap-10 text-gray-100 font-normal font-Barlow text-transform: uppercase text-lg'>
                <li><Link to='/'><span className='text-gray-50 font-bold mr-2'>00</span> Home</Link></li>
                <li><Link to='/destination'><span className='text-gray-50 font-bold mr-2'>01</span>Destination</Link></li>
                <li><Link to='/crew'><span className='text-gray-50 font-bold mr-2'>02</span>Crew</Link></li>
                <li><Link to='/technology'><span className='text-gray-50 font-bold mr-2'>03</span>Technology</Link></li>
              </ul>
            </nav>
          </div>

        </header>
    </>
    </>
  )
}

export default Header
