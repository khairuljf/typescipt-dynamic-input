import React from 'react'
import {ContactType}  from '../ContactType';

interface props{
    contacts:ContactType[];
    contact:ContactType;
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>;
    setContact:React.Dispatch<React.SetStateAction<ContactType>>;
   
}


const SingleUser:React.FC<props> = ({contacts, contact, setCotnacts, setContact}) => {


    const handleDelete = (id:string)=>{
        setCotnacts(
            contacts.filter((contact)=>{
                return contact.id !== id;
            })
        )
    }
    const handleEdit = (contact:ContactType)=>{
        setContact(prevState=>({...prevState, ...contact}))
    }


  return (
    <>
     <tr>
    <td>{contact.name}</td>
    <td>{contact.address}</td>
    <td>Friend Name : Name<br></br>
        Address : Address</td>
    <td>
        <span className='edit' onClick={(e)=> handleEdit(contact)}>Edit</span>
        <span className='delete' onClick={()=>handleDelete(contact.id)}>Delete</span>
    </td>
    </tr>
    </>
  )
}

export default SingleUser