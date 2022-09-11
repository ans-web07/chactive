import { async } from '@firebase/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase';

const styles={
    form: `h-14 w-full max-w-[700px] flex text-xl bg-gray-900 rounded-full relative mb-2`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none rounded-full`,
    button: `w-20  bg-gray-900 hover:bg-gray-700 text-green-500 rounded-full `,
}

const SendMessage = ({scroll}) => {
    const [input,setInput]=useState('');

    const sendMessage= async(e)=>{
        e.preventDefault();

        if(input==='')
        {
            alert('Please enter a message')
            return
        }

        const {uid,displayName}=auth.currentUser
        await addDoc(collection(db,'messages'),{
            text:input,
            name:displayName,
            uid,
            timestamp:serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <form onSubmit={sendMessage} className={styles.form}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} className={styles.input} type='text' placeholder='e.g. Hii there!'/>
        <button className={styles.button} type='submit'>Send</button>
    </form>
  )
}

export default SendMessage