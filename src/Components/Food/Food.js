import React, {useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
// const [selectedItem, setSelectedItem] = useState()

const Food = () => {
    const {id} = useParams();
    const history = useHistory();

    const {category, setCategory, count, setCount} = useContext(FoodContext)
    console.log("count",count)


    const items=category.find(item => item.id == id)
console.log(items)
const {name, description, image, price} = items;

const handleQuantityPlus = () => setCount(count+1)
const handleQuantityMinus = () => {
 if(count>1){
     setCount(count-1)
    }else{setCount(count)}
}

const handlePageChange = () =>{
  history.push(`/confirmation/${id}`);
  console.log(history)


}
    
    return (
        <div className="container mt-5" >
           <div className="row">
             <div className="col" style={{marginTop : "50px", marginLeft:"100px"}}>
              <h1 className="font-weight-bold">{name}</h1>
              <p className="font-weight-light">{description}</p>
              <div>
               <h1>${price}</h1>
                <div className=" border text-center d-inline">
                    <button onClick={handleQuantityMinus} className="btn">
                      -
                    </button>
                    <span>
                       <input size="1" type="text" placeholder={count} maxLength="9"/>
                    </span>
                    <button onClick={handleQuantityPlus} className="btn">
                        +
                    </button>
                  </div>
                  
                </div>
                <button onClick={handlePageChange} className="btn btn-danger">add cart</button>

              </div>

            
             <div className="col">
                 <img src={image} width="600px" alt=""/>
                </div>

             </div>
           </div>
            
        
    );
};

export default Food;