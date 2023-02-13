import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ThemeContext } from '../../../contexts/UseThemeContext';
import { data } from '../data/data';
import './SuccessfulOrder.css';


const SuccessfulOrder = () => {

    let successfullData = data.filter(s => s.status === "successfull");
    const { theme } = useContext(ThemeContext);


    return (
        <div id='successfullOrders'>
            <div className={theme === 'dark' ? "dark container" : "light container"}>
                {successfullData.length ? <table className='mt-4'>
                    <tr className="text-center">
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '20%' }}>Product Title</th>
                        <th style={{ width: '15%' }}>Price</th>
                        <th style={{ width: '15%' }}>Status</th>
                    </tr>
                    {
                        successfullData.map((product) => <tr key={product.id}>
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
export default SuccessfulOrder;