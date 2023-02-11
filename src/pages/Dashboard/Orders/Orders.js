import React, { useEffect, useState } from 'react';
import { data } from './data/data';
import './Orders.css'
// import data from './data/data';
// import { ThreeDots } from 'react-loader-spinner';

console.log(data)



const ProductList = () => {
    // const [allOrders, setAllOrders] = useState([]);
    // console.log(allOrders);

    // useEffect(() => {
    //     fetch(orders)
    //         .then((res) => res.json())
    //         .then((data) => setAllOrders(data))
    // }, [allOrders.length])


    return (
        <div id='orders'>
            <div className="container">
                {/* <h2 className='text-center'>Order List</h2> */}
                {data.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Product Title</th>
                        <th style={{ width: '20%' }}>Price</th>
                    </tr>
                    {
                        data.map((product) => <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                        </tr>)
                    }
                </table> : <h3>Loding...</h3>}
                {/* <ThreeDots width="100" /> */}
            </div>
        </div>
    );
};

export default ProductList;