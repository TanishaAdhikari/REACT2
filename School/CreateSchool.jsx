import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateSchool = () => {
  let [name, setName] = useState('');
  let [address, setAddress] = useState('');
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [noOfRooms, setNoOfRooms] = useState('');

  const handleSubmit = async (e) => {
     e.preventDefault(); 
     let data ={
        name: name,
        address: address,
        phone: phone,
        email: email,
        noOfRooms: noOfRooms
     }
     console.log("Form submitted", data)
     try {
         let result = await axios({
            url:"http://localhost:8000/school",
            method:"post",
            data:data,
         })
         console.log("School created", result.data);
         toast.success("School created successfully");
         setName('');
         setAddress('');
         setPhone('');
         setEmail('');
         setNoOfRooms('');
     } catch (error) {
         console.error("Error creating school", error);
         toast.error("Error creating school");
     }
    };

  return (
    <div>
     <form onSubmit={handleSubmit}> 
     <div>
              <label>name</label>
              <input id ="name"
              value={name}
              type="text"
              onChange={(e) => {
               setName(e.target.value);
             }}
             ></input>
            </div>
            <div>
                <label>address</label>
             <input id ="address"
              value={address}
              type="text"
              onChange={(e) => {
               setAddress(e.target.value);
             }}
             ></input>
            </div>
            <div>
                <label>phone</label>
             <input id ="phone"
              value={phone}
              type="number"
              onChange={(e) => {
               setPhone(e.target.value);
             }}
             ></input>
            </div>
            <div>
                <label>email</label>
             <input id ="email"
              value={email}
              type="email"
              onChange={(e) => {
               setEmail(e.target.value);   
             }}
             ></input>
            </div>
            <div>
                <label>noOfRooms</label>
             <input id ="noOfRooms"
              value={noOfRooms}
              type="number"
              onChange={(e) => {
               setNoOfRooms(e.target.value);
             }}
             ></input>
            </div>
            <div><button type="submit">Create</button></div>
        </form>
    </div>
  )
}
export default CreateSchool

/* name address phone email noOfRooms */
