import React from 'react';
import './Package.css'
import { Link } from 'react-router-dom';

const Package = ({ item }) => {
    const { _id, packajeName, description, price, img } = item;
    return (
        <div>
            <div class="col mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{packajeName}</h5>
                        <p class="card-text">{description}</p>
                        <h3>{price}$ <small>/per person</small></h3>
                        <Link to={`/OrderReview/${_id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;