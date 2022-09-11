import React from 'react'
import { auth } from '../firebase'


const styles={
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    sent: `bg-blue-500 text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-gray-500 text-white float-left rounded-br-full`,
}

const Msg = ({message}) => {

  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${styles.sent}`
  : `${styles.received}`

  return (
    <div>
        <div className={`${styles.message} ${messageClass}`}>
            <p className="absolute -mt-16 text-gray-400 text-xs">{message.name}</p>
            <p>{message.text}</p>

        </div>
    </div>
  )
}

export default Msg