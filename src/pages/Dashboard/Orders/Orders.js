import React, { useContext } from 'react';
import Pagination from '../../../components/Pagination/Pagination';
import { ThemeContext } from '../../../contexts/UseThemeContext';
import { data } from '../data/data';
import './Orders.css'


function Orders() {
    const { theme } = useContext(ThemeContext);

    return (
        <div id='orders'>
            <div className={theme === 'dark' ? "dark container" : "light container"}>
                <Pagination itemsPerPage={10} data={data} />
            </div>
        </div>
    );
};

export default Orders;