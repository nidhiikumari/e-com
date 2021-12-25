import React , {useContext}from 'react';
import { CartContext } from './Navbar';



  const Item = ({ name, img, Price, Total, id, quantity }) =>{
    const {removeItem, increament,decreament} = useContext(CartContext);
    return (
        <div>

            <div className='card h-100 text-center p-4 '>
                <div className='card-container row'>
                    <div className='card-col'>
                        <img src={img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h1>{name}</h1>
                            <p className="card-text">Price :{Price}</p>
                            <p className='card-text'> Total : {Total}</p>
                            <input type="text" className='carn'placeholder={quantity}/>
                            <button type="button" class="btn btn-info btn-sm m-2" onClick={() => increament(id)}>Add items</button>
                            <button type="button" class="btn btn-secondary btn-sm" onClick={() => decreament(id)}>Remove items</button>
                            <button type="button" class="btn btn-secondary btn-sm m-2" onClick={() => removeItem(id)}>DELETE ITEMS</button>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>









    )
}
export default Item;

