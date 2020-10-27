import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import "./Confirmation.css"


const Confirmation = () => {
    const {category, setCategory, count, setCount} = useContext(FoodContext)
    
     const {id} = useParams();
     const selectedIFood = category.filter(f => f.id == id);
     const {name, description, image, price} = selectedIFood[0];
    
    
        const { register, handleSubmit, watch, errors } = useForm();
        const onSubmit = data => console.log(data);
      
        // console.log(watch("example"));

        const handleQuantityPlus = () => setCount(count+1)
         const handleQuantityMinus = () => {
 if(count>1){
     setCount(count-1)
    }else{setCount(count)}
}
    const tax = 5;
    const dFee = 2;
  
    const tPrice = Number(`${price * count}`).toFixed(2);
    const grandTotal = (price * count + dFee + Number(tax)).toFixed(2);
    
    return (
        <div className="row container text-center">
            <div className="col m-4 p-5">

    <form className="p-3 border border-danger rounded" onSubmit={handleSubmit(onSubmit)}>
        <h5>Edit Delivery Details</h5>
        <hr width="80%"/>
      <input className="mb-2" name="example" defaultValue="name" ref={register} required/>  
 <br/>
      <input className="mb-2" name="544 S austin street" defaultValue="street" ref={register({ required: true })} />
 <br/>
       <input className="mb-2" name="austin" defaultValue="city" ref={register({ required: true })} />
 <br/>
        <input className="mb-2" name="94032" defaultValue="zip code" ref={register({ required: true })} />
 <br/>
      {errors.exampleRequired && <span>This field is required</span>}
 <br/>
      <input className="btn btn-danger" type="submit" value="save and continue"/>
    </form>

            </div>
            <div className="col ml-2 text-center">
                <div className="m-5">
                    <h3>From melrose plaza</h3>
                    <h5>estimate arriving time 30 min</h5>
                    <h5>{}</h5>
                      <div className="finalFood">
                        <div className="row">
                            <div className="col my-3">
                             <img width="80px" src={image} alt=""/>
                            </div>
                            <div className="col">
                             <h5>{name}</h5>
                             <h4>${price}</h4>
                             <p>Delivery fee</p>
                           </div>
                           <div className="col d-inline-block">

                           <button onClick={handleQuantityMinus} className="btn">
                           -
                            </button>
                           <h3>{count}</h3>
                           <button onClick={handleQuantityPlus} className="btn">
                           +
                          </button>
                           </div>
                         </div>
                         </div>
                         
                 <div className="text-left ml-4">
                     <div className="row">
                          <div className="col">
                              <h5>Subtotal</h5>
                          </div>
                          <div className="col">
                              <h5>{count}</h5>
                          </div>
                     </div>
                     <div className="row">
                          <div className="col">
                              <h5 >Total</h5>
                          </div>
                          <div className="col">
                              <h5>${tPrice}</h5>
                          </div>
                     </div>
                     <div className="row">
                          <div className="col">
                              <h5 >tax</h5>
                          </div>
                          <div className="col">
                              <h5>${tax}</h5>
                          </div>
                     </div>
                     <div className="row">
                          <div className="col">
                              <h5>Delivery fee</h5>
                          </div>
                          <div className="col">
                              <h5>${dFee}</h5>
                          </div>
                     </div>
                     <div className="row">
                          <div className="col">
                              <h5>Grand total</h5>
                          </div>
                          <div className="col">
                              <h5>${grandTotal}</h5>
                          </div>
                     </div>
                     <Link to="/checkout"><button className="btn btn-danger">Add to Cart</button></Link>
                 </div>
 
                     

            </div>
        </div>
    </div>

    );
};

export default Confirmation;