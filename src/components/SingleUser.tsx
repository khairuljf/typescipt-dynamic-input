import React from 'react'
import {ContactType}  from '../ContactType';

interface props{
    contacts:ContactType[];
    contact:ContactType;
    setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>;
    setContact:React.Dispatch<React.SetStateAction<ContactType>>;
    setFriends: React.Dispatch<React.SetStateAction<{
        name: string;
        address: string;
      }[]>>
   
}


const SingleUser:React.FC<props> = ({contacts, contact, setCotnacts, setContact, setFriends}) => {


    const handleDelete = (id:string)=>{
        setCotnacts(
            contacts.filter((contact)=>{
                return contact.id !== id;
            })
        )
    }
    const handleEdit = (contact:ContactType)=>{
        setContact(prevState=>({...prevState, ...contact}))
        setFriends(prevState=>([...contact.friendsInfo]))
    }
    
    

  return (
    <>
     <tr>
    <td>{contact.name}</td>
    <td>{contact.address}</td>
   <td>
   { 
    contact.friendsInfo.map((item, index)=><div key={index}><b>Name</b> : {item.name}<br></br>   <b>Address :</b> {item.address}</div>)
   }
</td>

    <td>
        <span className='edit' onClick={(e)=> handleEdit(contact)}>Edit</span>
        <span className='delete' onClick={()=>handleDelete(contact.id)}>Delete</span>
    </td>
    </tr>
    </>
  )
}

export default SingleUser