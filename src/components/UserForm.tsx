import React, { useState } from 'react'
import uuid from 'react-uuid';
import { isBooleanObject } from 'util/types';
import {ContactType}  from '../ContactType';
interface props{

  setCotnacts:React.Dispatch<React.SetStateAction<ContactType[]>>
  setContact:React.Dispatch<React.SetStateAction<ContactType>>
  contact:ContactType;
  contacts:ContactType[];
  friends: {
    name: string;
    address: string;
    otherFiels: boolean;
    otherInfo: {
        mobile: string | number;
        permanentAddress: string;
    };
}[]
setFriends:React.Dispatch<React.SetStateAction<{
  name: string;
  address: string;
  otherFiels: boolean;
  otherInfo: {
      mobile: string | number;
      permanentAddress: string;
  };
}[]>>

}

const UserForm:React.FC<props> = ({ contact, contacts,  setCotnacts, setContact, friends, setFriends }) => {



  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();

    if(contact.id){
      const newContact = {...contact}
            newContact.friendsInfo = friends
        setCotnacts(
          contacts.map((contactList) => (contactList.id === contact.id ? { ...newContact } : contactList))
        );

    }else{
      const newContact  = { ...contact, id:uuid()  }
   
      newContact.friendsInfo =friends

      setCotnacts(prevState=> ([ ...prevState, newContact  ]));
    }

   

    contact.id = contact.name = contact.address='';
    setFriends([{ name:'',  address:'', otherFiels:false, otherInfo:{mobile:'', permanentAddress:''}  }])

  } 


  const handleFriendChange = (index:number, event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
   
    const key=event?.target?.name;
    const value=event?.target?.value;

    console.log(key, value)

    let friendsData=friends;

    const friend=friendsData[index];


    friendsData[index] = {...friend,[key]:value}

    setFriends(prevState=>([...friendsData]))

  }

  const addFields = () => {
    let newfield:{ name: string, address: string, otherFiels:boolean, otherInfo:{mobile:string|number, permanentAddress:string}  } = {
        name: '',
        address: '',  
        otherFiels:false,
        otherInfo:{
          mobile:'',
          permanentAddress:'',
    } 
  }
    setFriends(prevState=>([...prevState, newfield]))
  }

  const addOtherInfo = (index:number)=>{
  
    
    let friendsData=friends;

    const friend=friendsData[index];

    friendsData[index] = {...friend, otherFiels:true}

    setFriends(prevState=>([...friendsData]))

  }
  const removeFields = (index:number) => {
    let data: { name: string, address: string, otherFiels:boolean, otherInfo:{mobile:string|number, permanentAddress:string}  }[]= [...friends];
    data.splice(index, 1)
    setFriends(data)
  }

  return (
    <>
    <form className='userform' onSubmit={handleSubmit}>

            <div className='selft-info'>
              <input 
              required
                  name="name"
                  type="text" 
                  value={contact.name } 
                  placeholder="Yor Name "  
                  onChange={(e)=> setContact(prevState=>({
                    ...prevState,
                    name:e.target.value
                  }))}
                
                  />
              <textarea 
                  name="address"
                  placeholder='Your address'
                  value={contact.address}
                  onChange={(e)=> setContact(prevState=>({
                    ...prevState,
                    address:e.target.value
                  }))}
                    ></textarea>

          </div>


          {friends.map((input, index) => {
          return (

            <div className='friend-inform form ' key={index}>
            <p>Friend Info</p>
            <input
            placeholder='Friend name'
            name='name'
            value={input.name}
            onChange={event => handleFriendChange(index, event )}
            />
            <textarea 
            name="address"
            placeholder='Friend Address'
            value={input.address}
            onChange={event => handleFriendChange(index, event )}
            ></textarea>


            { input.otherFiels && 
            <>
                <textarea 
                          name="permanentAddress"
                          placeholder='Permanent'
                          value={input.otherInfo.mobile}
                          onChange={event => handleFriendChange(index, event )}
                          ></textarea>


                          <input 
                            name='mobile'
                            placeholder='Enter mobile number'
                            onChange={event => handleFriendChange(index, event )}
                            value={input.otherInfo.permanentAddress}
                            />
            </>
            }
            




        {
            !input.otherFiels &&   <span 
                className='otherFields'
                onClick={event => addOtherInfo(index )}
              >Other Fields ?</span>
        }
           


            <span onClick={() => removeFields(index)} >- Remove Friend </span>
        </div>
          )
        })}


        <div className="friends-info action">
            <span onClick={addFields}>+ Add Friend</span> 
         </div>

        <button type='submit'>{!contact.id ? "Add Contact" : "Update"}</button>
    </form>
    </>
  )
}

export default UserForm