import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import './App.css'
import SignUp from './pages/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { loginUser } from './redux/features/userSlice'
import getUserByUID from './api/getUserByUID'
import Progress from './pages/Progress'

function App() {
  const user=useSelector(state=>state.data.user.user)
  const dispatch=useDispatch()
  const [pending,setPending]=useState(true)
  useEffect(()=>
    {

      onAuthStateChanged(auth,async(user)=>{
        if (user){
          const usertmp= await getUserByUID(user.uid)
          dispatch(loginUser({
          uid: usertmp.uid,
          username: usertmp.username,
        }))
        }
      setPending(false)
      })
    },[]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={!user?<SignUp/>:<Progress/>}>
        </Route>
        <Route path='signin' element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
