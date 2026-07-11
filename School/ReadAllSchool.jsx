import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReadAllSchool = () => {
  let [data, setData] = useState([]);
//  hit api on page load
// api gives data
// show data

let getData = async () => {

  try{
    let result =await axios({
      url: "http://localhost:8000/school",
      method: "GET",
    });
    console.log(result.data.result);
    setData(result.data.result);
  }catch(error){
    console.error("Error fetching data:", error);
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
              <p> name is School {item.name}</p>
              <p> address is {item.address}</p>
              <p> phone is {item.phone}</p>
              <p> email is {item.email}</p>
              <p> noOfRooms is {item.noOfRooms}</p>
            </div>
          )
        })
      }
      ReadAllSchool
      
    </div>
  )
}

export default ReadAllSchool