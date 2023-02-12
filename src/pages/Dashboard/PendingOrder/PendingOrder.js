import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { data } from '../data/data';
import './PendingOrder.css'


const PendingOrder = () => {

    let pendingData = data.filter(p => p.status === "pending");

    return (
        <div id='orders'>
            <div className="container">
                {pendingData?.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '20%' }}>Product Title</th>
                        <th style={{ width: '15%' }}>Price</th>
                        <th style={{ width: '15%' }}>Status</th>
                    </tr>
                    {
                        pendingData.map((product) => <tr key={product.id}>
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

export default PendingOrder;