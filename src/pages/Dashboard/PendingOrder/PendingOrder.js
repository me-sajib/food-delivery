import React, { useContext } from 'react';
import Pagination from '../../../components/Pagination/Pagination';
import { ThemeContext } from '../../../contexts/UseThemeContext';
import { data } from '../data/data';
import './PendingOrder.css'

const PendingOrder = () => {

    let pendingData = data.filter(p => p.status === "pending");
    const { theme } = useContext(ThemeContext);

    return (
        <div id='pendingOrders'>
            <div className={theme === 'dark' ? "dark container" : "light container"}>
                <Pagination itemsPerPage={10} data={pendingData} />

            </div>
        </div>
    );
};

export default PendingOrder;