import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Logout from './Logout'


const styles = {
    nav: `bg-gradient-to-b from-gray-600 to-gray-900 h-20 flex  justify-between items-center p-4 w-[200px] md:w-[500px] lg:w-[728px]`,
    heading: `text-green-400 text-3xl font-mono hover:text-red-400`,
}
const Nav = () => {
  const [user]=useAuthState(auth)
  // console.log(user)
  return (
    <div className={styles.nav}>
        <div className={styles.heading}>
            Chactive 
        </div>
        {user?<Logout/>:<Signin/>}
      
    </div>
  )
}

export default Nav