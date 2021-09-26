import React, { useEffect, useState } from 'react';
import Allbike from '../Allbike/Allbike';
import Cart from '../Cart/Cart';

const Body = () => {
    
    const [products, setproduct] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data =>setproduct(data))
    },[])

    
    const HandleSave  = (products)=>{
        const newcart = [...cart,products];
        setcart(newcart);
        
       

}
    return (
        
        <div className="container">
               <div className="row mb-5">

               <div className="row row-cols-1 row-cols-md-3 g-4 countiner col-9 ">
                {
                    products.map(bikes => <Allbike
                         bikes={bikes}
                         key={bikes.key}
                         HandleSave={HandleSave}
                           ></Allbike>)
                }
                </div> 
                <div className="col-3 mt-5 ">
                <Cart post={cart}></Cart>
                </div>
            </div>
            </div>
    );
};

export default Body;