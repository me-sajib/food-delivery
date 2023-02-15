import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Pagination from '../../../components/Pagination/Pagination';
import { ThemeContext } from '../../../contexts/UseThemeContext';
import { data } from '../data/data';
import './Orders.css'


export function Items({ currentItems }) {
    return (
        <>
            {currentItems?.length ? <table className='mt-4'>
                <thead>
                    <tr className="text-center">
                        <th style={{ width: '5%' }}>id</th>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '20%' }}>Product Title</th>
                        <th style={{ width: '15%' }}>Price</th>
                        <th style={{ width: '10%' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems && currentItems.map((product) => <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.status}</td>
                        </tr>)
                    }
                </tbody>
            </table> : <ThreeDots width="100" />}
        </>
    );
}

function Orders({ currentItems }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div id='orders'>
            <div className={theme === 'dark' ? "dark container" : "light container"}>

                <Pagination itemsPerPage={13} data={data} />
            </div>
        </div>
    );
};

export default Orders;