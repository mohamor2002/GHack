import { GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FETCH_STATUS } from '../constants/fetchStatus';
import SignUpWithGoogle from '../api/SignUpWithGoogle';
import GoogleIcon from '@mui/icons-material/Google';
import LogInWithEmailAndPassword from '../api/LogInWithEmailAndPassword';


const SignIn = () => {

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
          <p className='w-96 text-white'>Email</p>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className=' w-96 outline-none py-3 mb-4 px-4 rounded-md text-sm' placeholder='email' />
          <p className='w-96 text-white'>Password</p>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className=' w-96 outline-none py-3 px-4 rounded-md text-sm' placeholder='password' />
          <div className='flex space-x-4 mt-4 w-96 text-sm mb-8'>
            <input checked={checked} onChange={()=>setChecked(prev=>!prev)} id='check' type="checkbox" className=' scale-125 accent-main-green text-white ' />
            <label htmlFor="check" className=' text-white'>remember me</label>
          </div>
          <button onClick={e=>LogInWithEmailAndPassword(e,setStatus,email,password,username)} className='flex justify-center bg-main-green w-96 px-12 py-4 text-white  rounded-md' >Sign In</button>
          <button className='flex justify-center bg-white w-96 px-12 py-4 rounded-md mt-4' onClick={(e)=>SignUpWithGoogle(e,setStatus,googleProvider)}>
            <GoogleIcon className=' text-main-green'></GoogleIcon>
            <p className='text-main-blue '>Sign In with Google</p>
          </button>

          </form>
        </div>
        
    </div>
  )
}

export default SignIn