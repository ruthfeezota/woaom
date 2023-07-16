import React from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/ChatRoom/Chat'

import { auth } from '/Users/rxz3439/Desktop/woaom/src/firebase/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto bg-gray-900`,
  sectionContainer: `flex flex-col h-[90vh] mt-10 shadow-xl border relative`,
};

function ChatRoom() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <> 
    <Navbar/>
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        
        {user ? <Chat /> : null}
      </section>
    </div>
    </>
  );
}

export default ChatRoom;
