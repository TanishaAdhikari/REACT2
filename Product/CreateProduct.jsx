import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateProduct = () => {
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [quantity, setQuantity] = useState('');
    let [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
     e.preventDefault(); 
     let data ={
        name: name,
        price: price,
        quantity: quantity,
        description: description,
     }
     console.log("Form submitted", data);
    
     try {
        let result = await axios({
        url:"http://localhost:8000/product",
        method:"post",
        data:data,
     });
     toast.success("Product created successfully");
    
    setName('');
    setPrice('');
    setQuantity('');
    setDescription('');
   
     }
      catch (error) {
      toast.error(error.response.data.message);
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
                <label>price</label>
             <input id ="price"
              value={price}
              type="number"
              onChange={(e) => {
               setPrice(e.target.value);
             }}
             ></input>
            </div>
            <div>
                <label>quantity</label>
             <input id ="quantity"
              value={quantity}
              type="number"
              onChange={(e) => {
               setQuantity(e.target.value);
             }}
             ></input>
            </div>
            <div>
                <label>description</label>
             <input id ="description"
             value={description}
             onChange={(e) => {
               setDescription(e.target.value);
             }}
             ></input>
            </div>
            <div><button type="submit">Create</button></div>
        </form>
    </div>
  )
}
export default CreateProduct

/* name 
   price
   quantity
   description*/

/*send data to bakend using axios or fetch api*/