import React, { useContext, useState } from 'react';
import { FoodContext } from '../../App';
import bannerbackground from '../../bannerbackground.png'
import './Poster.css'
import { Link } from "react-router-dom";
import Food from '../Food/Food';
import Foods from '../Foods/Foods';




const Poster = () => {
    const [category, setCategory] = useContext(FoodContext)
    const [selectCat,setSelectCat] = useState("dinner");

    const imageStyle = {
        backgroundImage: `url(${bannerbackground})`,
        height: "300px",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%"

    }
   
    const handleCategory = (e) => {
        let clickedCat = e.target.innerText;
        setSelectCat(clickedCat);
    }

    const food = category.filter(cat => cat.category == selectCat)
    
    return (
        <>
         <div style={imageStyle}>
                    <h1 style={{ textAlign: 'center', fontSize: "1.8rem", paddingTop: "130px" }}>Best Food waiting for you</h1>
        </div>
        <div className="categories">
                <a  onClick={handleCategory} className={selectCat === "breakfast" ? "active-link" : '', "design"}>breakfast</a>
                <a onClick={handleCategory} className={"design", selectCat === "lunch" ? "active-link" : '', "design"}>lunch</a>
                <a onClick={handleCategory} className={"design", selectCat === "dinner" ? "active-link" : '', "design"}>dinner</a>

              {/* <h1>Cataegory : {selectCat}</h1> */}
            </div>
            <div>
            {
                food.map(foods => <Foods foods={foods} key={foods.id}></Foods>)
            }
            </div>
        </>
    );
};

export default Poster;

