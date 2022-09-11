import React from 'react'
import { auth } from '../firebase'


const styles={
    signoff:`bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white `
}



const Logout = () => {
    const signOut =()=>{
        signOut(auth);
    }


  return (
    <button className={styles.signoff} onClick={()=>auth.signOut()}>
        Logout
    </button>
  )
}

export default Logout