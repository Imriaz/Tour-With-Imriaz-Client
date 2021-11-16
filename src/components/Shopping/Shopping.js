import React from 'react';
import './Shopping.css'

const Shopping = () => {
    return (
        <>
            <div className='my-5 shopping-container'>
                <h1>Welcome to Shopping!!</h1>
                <h5>Get all of your Tour shopping including our package</h5>
            </div>
            <div className='row'>
                <div class="col mb-5">
                    <div class="card">
                        <img src='https://i.ibb.co/rwLMdhD/shopping1.jpg' class="card-image img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Tent</h5>
                            <p class="card-text">This is a family tent for a single family. Comport to any place.</p>
                            <h2>30$</h2>
                            <button type="button" class="btn btn-outline-info m-2">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card">
                        <img src='https://i.ibb.co/X5Zzb6s/shopping2.jpg' class="card-image" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Travel Backpack</h5>
                            <p class="card-text">This is a personal Backpack Comport to any place.</p>
                            <h2>20$</h2>
                            <button type="button" class="btn btn-outline-info m-2">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card">
                        <img src='https://i.ibb.co/rsk60bV/Ready-for-travel-concept-Top-view-of-essentials-for-tourist-with-clothes-accessories-and-gadgets-wal.jpg' class="card-image" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Trolly Bag</h5>
                            <p class="card-text">This is a family tent for a single family. Comport to any place.</p>
                            <h2>50$</h2>
                            <button type="button" class="btn btn-outline-info m-2">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shopping;