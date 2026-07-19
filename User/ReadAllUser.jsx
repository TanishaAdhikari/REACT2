import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReadAllUser = () => {
  let [data, setData] = useState([]);
//  hit api on page load
// api gives data
// show data

let getData = async () => {

  try{
    let result =await axios({
      url: "http://localhost:8000/user",
      method: "GET",
    });
    console.log(result.data.result);
    setData(result.data.result);
  }catch(error){
   
  }

}


  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div> 
      {
        data.map((item,i) => {
          return (
            <div key={i}>
              <p> name is User {item.name}</p>
              <p> email is {item.email}</p>
              <p> password is {item.password  }</p>
            </div>
          )
        })
      }
      ReadAllUser
      
    </div>
  )
}

export default ReadAllUser