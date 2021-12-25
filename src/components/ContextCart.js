import React from 'react';
import ReactLogo from './restaurant_24px.svg';
import  { useContext} from 'react';
import Item from './item';
import { CartContext} from './Navbar';


export const ContextCart =() => {

    const {item}= useContext(CartContext);
    return (
        <div>
             <nav className="navbar navbar-light bg-primary ">
                <div className="container">
                    <div className='inline-block'>
                        <a className="navbar-brand" href="#">
                            <img src={ReactLogo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                            Food Resturant
                        </a>
                    </div>
                    
                </div>
            </nav>
            <div className='row'>
                <div className="card-items">

                    <div className='col-md-3'>
                        {
                            item.map((curItem) => {
                                return <Item key={curItem.id} {...curItem} />

                            })
                        }

                    </div>
                </div>
            </div>
            <div className='cart'>

            </div>


            <div className='row mt-7'>

                <div className='card h-100 text-center p-4 inline-block'>

                    <div className="card-body ">
                        <div className='card-inline'>
                            <h3>Order Summery</h3>
                            <p>{totalItem}</p>
                            <p>pepsi : 1</p>
                            <button type="button" class="btn btn-info btn-sm m-2">Add items</button>
                            <button type="button" class="btn btn-secondary btn-sm">Remove items</button>
                        </div>

                        <div className='m-3'>
                            <p>Fries : 5</p>
                            <button type="button" class="btn btn-info btn-sm m-2">Add items</button>
                            <button type="button" class="btn btn-primary btn-sm">remove items</button>
                        </div>


                        <p className="card-text">Price : 50</p>
                        <p>Total(INR) :{totalAmount}</p>

                        <button type="button" class="btn btn-success btn-sm m-2">Save and Checkout</button>
                        <button type="button" class="btn btn-danger btn-sm" onClick={clearCart}>Clear Cart</button>
                    </div>

                </div>
            </div>


            
        </div>
    );
}


