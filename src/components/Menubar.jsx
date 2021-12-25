import React from 'react';

function Home() {
    return (
        <div>

            <div className='col-md-3'>

                <div className='card h-100 text-center p-4'>
                    <img src={fries} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1>Fries</h1>
                        <p className="card-text">Price : 100</p>
                        <p>Total : 2</p>
                        <button className='bg-primary text-white'>ADD TO CARD</button>
                        <button className='bg-secondary text-white'>Remove from card</button>
                    </div>

                </div>
            </div>

            <div className='col-md-3'>

                <div className='card h-100 text-center p-4'>
                    <img src={coke} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1>Coke</h1>
                        <p className="card-text">Price : 50</p>
                        <p>Total : 10</p>
                        <button className='bg-primary text-white'>ADD TO CARD</button>
                        <button className='bg-secondary text-white'>Remove from card</button>
                    </div>

                </div>
            </div>

            <div className='col-md-3'>

                <div className='card h-100 text-center p-4'>
                    <img src={pepsi} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1>pepsi</h1>
                        <p className="card-text">Price : 50</p>
                        <p>Total : 6</p>
                        <button className='bg-primary text-white'>ADD TO CARD</button>
                        <button className='bg-secondary text-white'>Remove from card</button>
                    </div>

                </div>


            </div>
            </div>
            )


}
 export default Home;


            {/* // <div className='card-header mb-8'> */}
            {/* <div className="card-body text-center p-5 ">
<h1 className="card-title">Welcome to the food resturant</h1>
<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
<button className="btn btn-primary">Go To Menu</button>
</div>

</div> */}