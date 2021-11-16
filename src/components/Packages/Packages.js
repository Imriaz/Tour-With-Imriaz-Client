import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css'

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://serene-harbor-61462.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);
    return (
        <>
            <div>
                <h2 className='text-primary mt-5'>Our Packages</h2>
            </div>
            <div className='packages-container' id='packages'>
                {
                    packages.map(item => <Package
                        key={item._id}
                        item={item}
                    ></Package>
                    )
                }
            </div>
        </>
    );
};

export default Packages;