import React from 'react';
import Nav from './components/Nav';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

const styles={
  appContainer: `max-w-[728px] mx-auto text-center my-0`,
  appCard: `flex flex-col  bg-gray-800 relative`,

}

function App() {
  const [user]=useAuthState(auth);
  console.log(user);


  return (
    <div className={styles.appContainer}>
      
      <section className={styles.appCard}>
        <Nav/>
        {user?<Chat/>:null}
        
      </section>
      
    </div>
  );
}

export default App;
