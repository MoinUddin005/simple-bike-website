import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking, faDollarSign , faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Nameshow from '../Nameshow/Nameshow';
import './Cart.css'

const Cart = (props) => {
    const {post} =props;
   
    let price = 0;
    for(const product of post){
        price = price + product.price;
    }
    const element = <FontAwesomeIcon icon={faBiking} />
    const elements = <FontAwesomeIcon icon={faDollarSign} />
    const cart = <FontAwesomeIcon icon={faShoppingBag} />
    
    return (
        <div className="border fixeds">
                <div className=" card-header shadow p-3 mb-5 bg-body rounded">{cart} <b>Sopping Card</b></div>
                    <div className="card-body text-black">
                    <h5>{element} Bike Added: {props.post.length} </h5>
                    <h5>Total price : <small>{elements}</small>{price}</h5>

                        {
                            
                           post.map(alldata => <Nameshow alldata={alldata}></Nameshow>)
                        }

                        
                    </div>

               </div>
    );
};

export default Cart;