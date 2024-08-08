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
          <Link to="/">
            <img className='absolute left-5 top-5' src={logo} alt="" />
          </Link>

            <img className='absolute right-5 top-5' src={menu} alt="" />
        </header>
    </>
    </>
  )
}

export default Header
