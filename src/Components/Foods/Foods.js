import React from 'react';
import { Link } from 'react-router-dom';
import "./Foods.css"

const Foods = (props) => {
    const { name, description, image, price, id } = props.foods;

    return (
        <>
        <Link to ={`/food/${id}`}>
         <div className="container">
             <div className="item">
             
                <img src={image} className="" style={{width:"100px", height:"120px"}} alt="" />
                  <div style={{textDecoration:"none"}} className="">
                     <h5 style={{textDecoration:"none", color:"red"}} className="">{name}</h5>
                     <p style={{textDecoration:"none"}}  className="text-dark">{description}</p>
                     <p className="text-success">$ {price} </p>
                 </div>
            

             </div>
         </div>
         </Link>
         
        </>
    );
};

export default Foods;