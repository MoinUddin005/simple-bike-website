import React from 'react';
import "./Allbike.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Allbike = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name,Engine,Top_speed,milage,img,price} =props.bikes
    return (
       <div className="col">
           <div className="card h-100 shadow p-3 mb-5 bg-body rounded" >
           <img src={img} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h4 className="card-title">{name}</h4>
               <h6><small><b>Engine:</b>{Engine}</small></h6>
               <h6><small><b>Top Speed:</b>{Top_speed}</small></h6>
               <h6><small><b>Milage:</b>{milage}</small></h6>
               <h6><small><b>Price:</b>{price}</small></h6>
               <button onClick={()=>props.HandleSave(props.bikes)} className="btn btn-success">{element}Add to Card</button>
               

               </div>
           </div>
       </div>
    );
};

export default Allbike;