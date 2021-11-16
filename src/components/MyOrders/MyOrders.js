import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://serene-harbor-61462.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://serene-harbor-61462.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = myOrders?.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
            console.log(id);
        }
    };

    const handleStatus = (id) => {
        const url = `https://serene-harbor-61462.herokuapp.com/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify('Approved')
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated Successfully");
                    setMyOrders({});
                }
            })
    };


    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My Orders</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Name</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {myOrders?.map((allOrder, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allOrder?.name}</td>
                            <td>{allOrder?.packajeName}</td>
                            <td>{allOrder?.price}</td>
                            <td>{allOrder?.email}</td>
                            <td className='text-warning'>{allOrder?.status}</td>
                            <button onClick={() => handleStatus(allOrder?._id)} className="btn bg-danger p-2 m-1">Update</button>
                            <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;