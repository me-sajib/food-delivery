import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { data } from '../data/data';
import './Orders.css'


console.log(data)



const Orders = () => {



    return (
        <div id='orders'>
            <div className="container">
                {/* <h2 className='text-center'>Order List</h2> */}
                {data.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '20%' }}>Product Title</th>
                        <th style={{ width: '15%' }}>Price</th>
                        <th style={{ width: '15%' }}>Status</th>
                    </tr>
                    {
                        data.map((product) => <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.status}</td>
                        </tr>)
                    }
                </table> : <ThreeDots width="100" />}
            </div>
        </div>
    );
};

export default Orders;