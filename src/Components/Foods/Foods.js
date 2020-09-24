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
                  <div className="">
                     <h5 className="">{name}</h5>
                     <p className="">{description}</p>
                     <p className="">$ {price} </p>
                 </div>
            

             </div>
         </div>
         </Link>
         
        </>
    );
};

export default Foods;