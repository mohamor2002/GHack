import React from 'react'
import logo from './../assets/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import SignOut from '../api/SignOut'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const location=useLocation()
    console.log(location)
    const options =['progress','courses','projects','practice','roussources']
  return (
    <nav className='flex w-full h-16 shadow-md justify-between items-center px-12 font-main bg-white'>
        <img src={logo} alt="" className=' w-16 aspect-square '/>
        <ul className=' flex w-[50%] bg-main-gray rounded-full h-12 items-center justify-around px-4 '>
            {
                options.map((e,index)=>(
                    <li key={index} className={`px-2 py-1`}>
                        <NavLink
                        to={`/${e}`}
                        className={` ${`/${e}`===location.pathname?'text-white bg-black':'text-black'} rounded-full text-sm px-4 py-1 flex justify-center items-center capitalize`}
                        >
                            <p>
                            {e}
                            </p>
                        </NavLink>
                    </li>
                ))
            }
        </ul>
        <div className=' w-[25%] border border-1 border-black opacity-20 h-10 rounded-full justify-between items-center flex px-2 '>
            <SearchIcon/>
            <input type="text" className=' flex-1 outline-none ml-4' placeholder='Search' />
        </div>
        <div className=' w-12 aspect-square bg-black rounded-full cursor-pointer' onClick={SignOut}>
        </div>
        
    </nav>
)
}

export default Navbar