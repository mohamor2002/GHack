import { GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FETCH_STATUS } from '../constants/fetchStatus';
import SignUpWithGoogle from '../api/SignUpWithGoogle';
import GoogleIcon from '@mui/icons-material/Google';
import SignUpWithEmailAndPassword from '../api/SignUpWithEmailAndPassword';


const SignUp = () => {

  const googleProvider = new GoogleAuthProvider()
  const dispatch=useDispatch()
  const [status,setStatus]=useState(FETCH_STATUS.IDLE)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const [checked,setChecked]=useState(false)


  return (
    <div className='h-screen w-full grid grid-cols-2 font-main rounded-lg'>
      <div className='col-span-1 bg-main-gray h-full'>
         
      </div>
      <div className=' bg-main-blue col-span-1 h-full '>
        <form className='flex flex-col items-center justify-center h-full'>
          <h1 className=' font-bold text-4xl text-white mb-8 '>Sign In to FineLearn</h1>
          <button className='flex justify-around bg-white w-96 px-12 py-4 rounded-md' onClick={(e)=>SignUpWithGoogle(e,setStatus,googleProvider)}>
            <GoogleIcon className=' text-main-green'></GoogleIcon>
            <p className='text-main-blue '>Sign Up with Google</p>
          </button>
          <p className=' font-bold text-white my-4'>OR</p>
          <input value={username} onChange={e=>setUsername(e.target.value)} type="text" className=' w-96 outline-none py-3 mb-4 px-4 rounded-md text-sm' placeholder='username' />
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className=' w-96 outline-none py-3 mb-4 px-4 rounded-md text-sm' placeholder='email' />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className=' w-96 outline-none py-3 px-4 rounded-md text-sm' placeholder='password' />
          <div className='flex space-x-4 mt-4 w-96 text-sm'>
            <input required checked={checked} onChange={()=>setChecked(prev=>!prev)} id='check' type="checkbox" className=' scale-125 accent-main-green text-white ' />
            <label htmlFor="check" className=' text-white'>I have read the Term & Conditions</label>
          </div>
          <button onClick={e=>SignUpWithEmailAndPassword(e,setStatus,email,password,username)} className='flex justify-around bg-main-green w-96 px-12 py-4 text-white mt-8 rounded-md' >Sign Up</button>

          </form>
        </div>
        
    </div>
  )
}

export default SignUp