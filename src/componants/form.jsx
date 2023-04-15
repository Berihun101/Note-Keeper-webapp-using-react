import { useState } from "react";


export default function Form(){
 const [contact, setContact]=useState({
  fName:'',
  lName:'',
  Email:''
 })
  function inputHandler(event){
   const {name,value}=event.target
   setContact(prevValue=>{
    return {
      ...prevValue,
      [name]:value
    }
   })
  }
    return (
        <div className="container">
          <h1>Hello {contact.fName} {contact.lName}</h1>
          <p>{contact.Email}</p>
          <form>
            <input onChange={inputHandler} name="fName" placeholder="First Name" value={contact.fName} />
            <input onChange={inputHandler}  name="lName" placeholder="Last Name" value={contact.lName} />
            <input onChange={inputHandler}  name="Email" placeholder="Email" value={contact.Email} />
            <button>Submit</button>
          </form>
        </div>
      );

}