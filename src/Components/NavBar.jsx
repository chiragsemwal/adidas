import React from 'react'

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
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>SPORTS</li>
            <li>LIFESTYLE</li>
            <li>OUTLET</li>
            <li className=' text-red-600 ' >END OF SEASON SALE</li>
        </ul>

        <div className=' flex gap-3 ' >
            <form className='flex items-center relative  '>  
            <input className=' bg-gray-200 h-7 border text-black ' placeholder='Search' type="text" name="searchbar" id="search" />
            <button className=' absolute py-1 bg-none top-0 right-0' ><img className='h-5' src="src/assets/magnifying-glass_5844467.png" alt="search" /></button>
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