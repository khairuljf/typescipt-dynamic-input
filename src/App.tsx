import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import AddFriend from './components/AddFriend';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import {ContactType}  from './ContactType';

function App() {

 
  const [contacts, setCotnacts] = useState<ContactType[]>([]);

  const [contact, setContact] = useState<ContactType>({
    id:'',
    name:'',
    address:'',
    friendsInfo:[{
      name:'',
      address:''
    }]

  });


  return (
    <div className="App">
          <header>
            <h1 className='text-center'>User Info</h1>
          </header>
          <div className='main-content'>
               <UserForm  setCotnacts={setCotnacts} contact={contact}  setContact={setContact} contacts={contacts}  /> 
              <div className="result">
                  <UserList contacts={contacts} setCotnacts={setCotnacts} setContact={setContact} />
              </div>
          </div>
    </div>

  );

}

export default App;
