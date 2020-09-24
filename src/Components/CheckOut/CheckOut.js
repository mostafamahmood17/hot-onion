import React from 'react';
import "./CheckOut.css"

const CheckOut = () => {
    return (
        <div className="">
        <div className="row">
            <div className="col">
                <img className="imageMap" src="https://imgur.com/5Cg7q5n.png" alt=""/>

            </div>
            <div className="col ml-5">
                <div className="bod">
                    <div><img className="imageMoto" src="https://imgur.com/wr8tenL.png" alt=""/></div>
                    <div>
                        <h4>Your location</h4>
                        <p>111 austin ave</p>
                        <br/>
                        <h4>Shop address</h4>
                        <p>322 Austin Ave</p>
                    </div>
                    <div>
                        <h3>09:30</h3>
                        <p>Estimate Delivery time</p>
                    </div>
                    <div className="">
                        <div className="row">
                            <img className="imageCus" src="https://imgur.com/fyFi7YZ.png" alt=""/>
                            <h5 className="ml-3 my-3">Customer Name</h5>
                        </div>
                        
                    </div>
                    <div className="text-center">
                        <button className="my-2 btn btn-danger">Contact</button>
                    </div>
                    

                </div>

            </div>
        </div>
            
        </div>
    );
};

export default CheckOut;