import { signInWithEmailAndPassword } from "firebase/auth";

export default async function LogInWithEmailAndPassword(e,setStatus,email,password){
    e.preventDefault()
    try {
      setStatus(FETCH_STATUS.LOADING)
      const result = await signInWithEmailAndPassword(auth,email,password)
      setStatus(FETCH_STATUS.SUCCESS)
      toast.success('Welcome back to FMN !!');

    } catch (error) {
      setStatus(FETCH_STATUS.ERROR)
      toast.error(error.message)
    }

  }