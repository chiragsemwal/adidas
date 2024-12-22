import React from 'react'
import { LuSearch } from "react-icons/lu";

function NavBar() {
  return (
    <>
    <div className=' flex justify-end px-3 py-1' >
        <ul className=' flex gap-4 font-thin text-xs cursor-pointer ' >
            <li>help</li>
            <li>orders and returns</li>
            <li>sign up</li>
            <li>log in</li>
        </ul>
    </div>
    <div className=' flex justify-between items-center px-9 ' >

        <a className=' ' href="https://www.adidas.co.in/"><img className=' h-20 ' src="https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="adidasLogo"/></a>

        <ul className=' ml-36 flex gap-5 cursor-pointer ' >
            <li className=' font-bold ' >MEN</li>
            <li className='font-bold' >WOMEN</li>
            <li className='font-bold' >KIDS</li>
            <li>SPORTS</li>
            <li>LIFESTYLE</li>
            <li className='font-bold'>OUTLET</li>
            <li className=' font-bold text-red-600 ' >END OF SEASON SALE</li>
        </ul>

        <div className=' flex gap-3 ' >
            <form className='flex items-center relative  '>  
            <div className='w-full relative'>
            <input className=' bg-gray-200 h-7 border text-black ' placeholder='Search' type="search" name="searchbar" id="search" />
            <LuSearch  className=' absolute bottom-2 left-40 ' />
            </div>
            </form>
            <ul className='flex gap-4' >
                <li><button type="button"><img className='h-5' src="src/assets/person_13924070.png" alt="user" /></button></li>
                <li><button type="button"><img className='h-5' src="src/assets/heart_10350805.png" alt="favourites" /></button></li>
                <li><button type="button"><img className='h-5' src="src/assets/bag.png" alt="cart" /></button></li>
            </ul>
        </div>


    </div>
    
    <div className=' text-center bg-gray-200 p-3' >
        <p>Your Jersey, Your Way! Customize your jersey with your name and number.</p>
    </div>

    </>
  )
}

export default NavBar