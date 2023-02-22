import React, { useContext } from 'react';
import Pagination from '../../../components/Pagination/Pagination';
import { ThemeContext } from '../../../contexts/UseThemeContext';
import { data } from '../data/data';
import './SuccessfulOrder.css';




const SuccessfulOrder = () => {

    let successfullData = data.filter(s => s.status === "successfull");
    const { theme } = useContext(ThemeContext);


    return (
        <div id='successfullOrders'>
            <div className={theme === 'dark' ? "dark container" : "light container"}>
                <Pagination itemsPerPage={10} data={successfullData} />
            </div>
        </div>
    );
};
export default SuccessfulOrder;