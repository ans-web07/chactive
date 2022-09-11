import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React,{useState,useEffect,useRef} from 'react'
import { db } from '../firebase';
import Msg from './Msg';
import SendMessage from './SendMessage';



const styles={
    main:`flex flex-col p-[10px] relative`,
}
const Chat = () => {
  const[messages,setMessages]=useState([]);

  const scroll=useRef();

  useEffect(()=>{
    const q=query(collection(db,'messages'),orderBy('timestamp'));
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
      let messages=[];
      querySnapshot.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id});
      });
      setMessages(messages);
    });
    return ()=>unsubscribe();
  },[])

  return (
    <>
        <main className={styles.main}>
            {messages && messages.map((message)=>(
              <Msg key={message.id} message={message} />
            ))}
            
        </main>
        <br/>
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
    
    </>
  )
}

export default Chat