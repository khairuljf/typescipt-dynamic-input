import React from 'react'

const AddFriend:React.FC = () => {
  return (
        <div className='friend-inform form'>
            <p>Friend Info</p>
            <input
            placeholder='Friend name'
            name='freindName'
            value="Friend name"
            />
            <textarea 
            name="address"
            placeholder='Friend Address'
            value="Friend Address"
            // onChange={(e)=> setContact(prevState=>({
            //   ...prevState,
            //   address:e.target.value
            // }))}
            ></textarea>
        </div>
  )
}

export default AddFriend