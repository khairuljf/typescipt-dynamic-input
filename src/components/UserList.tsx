import { constants } from 'buffer';
import React from 'react'
import {ContactType}  from '../ContactType';
import SingleUser from './SingleUser';

interface props{
    contacts:ContactType[];
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>;
    setContact:React.Dispatch<React.SetStateAction<ContactType>>

};

const UserList:React.FC<props> = ({contacts, setCotnacts, setContact}) => {

  return (
      <>
        <table className='user-table'>
          <thead>
            <tr>
              <td>Your Name</td>
              <td>Your address</td>
              <td>Friend name & Address</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
           
              {

          contacts.map(contact=> <SingleUser key={contact.id} contact={contact}  contacts={contacts}  setCotnacts={setCotnacts} setContact={setContact} />)

        
              }
          
          </tbody>
        </table>
      </>
  )
}

export default UserList