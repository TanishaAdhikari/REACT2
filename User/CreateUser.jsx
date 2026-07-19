import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateUser = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
       let data ={
          name: name,
          email: email,
          password: password
       }
       console.log("Form submitted", data)
       try {
          let result = await axios({
            url:"http://localhost:8000/user",
            method:"post",
            data:data,  
          })
        toast.success("User created successfully");    
        setName('');
        setEmail('');
        setPassword('');
       } catch (error) {
         console.error("Error creating user", error);
         toast.error("Error creating user");
       }
       
      };
  return (
    <div>
      <form onSubmit ={handleSubmit}>
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
                <label>password</label>
             <input id ="password"
              value={password}
              type="password"
              onChange={(e) => {
               setPassword(e.target.value);
             }}
             ></input>
            </div>
            <div><button type="submit">Create</button></div>
        </form>
    </div>
  )
}

export default CreateUser
/*name email password */