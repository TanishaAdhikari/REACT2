import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReadAllProduct = () => {
  let [data, setData] = useState([]);
//  hit api on page load
// api gives data
// show data

let getData = async () => {

  try{
    let result =await axios({
      url: "http://localhost:8000/product",
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
              <p> name is Product {item.name}</p>
              <p> price is {item.price}</p>
              <p> quantity is {item.quantity}</p>
              <p> description is {item.description}</p>
            </div>
          )
        })
      }
      ReadAllProduct
      
    </div>
  )
}

export default ReadAllProduct