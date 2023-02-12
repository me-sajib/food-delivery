import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.config';
import './Dashboard.css';
import classes from "./Dashboard.module.css";


const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='d-flex dashboard'>
            <div className="d-flex flex-column side-bar flex-shrink-0 p-3 text-white bg">
                <ul className="nav nav-pills flex-column mb-auto">
                    {user?.email ? <li>
                        <NavLink to="orders" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            {/* <FontAwesomeIcon className='text-danger' icon={faFirstOrderAlt} /> */}
                            <span className="ms-2">All Orders</span>
                        </NavLink>
                    </li> : " "}

                    {user?.email ? <li>
                        <NavLink to="successfulOrder" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            {/* <FontAwesomeIcon className='text-danger' icon={faFirstOrderAlt} /> */}
                            <span className="ms-2">Successful Order</span>
                        </NavLink>
                    </li> : " "}

                    {user.email ? <li className="nav-item">
                        <NavLink to="pendingOrder" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            {/* <FontAwesomeIcon className='text-danger' icon={faSquarePlus} /> */}
                            <span className="ms-2">Pending Order</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email ? <li className="nav-item">
                        <NavLink to="products" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            {/* <FontAwesomeIcon className='text-danger' icon={faSquarePlus} /> */}
                            <span className="ms-2">All Product</span>
                        </NavLink>
                    </li> : ""}


                    {user?.email ? <li className="nav-item">
                        <NavLink to="addProduct" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            {/* <FontAwesomeIcon className='text-danger' icon={faSquarePlus} /> */}
                            <span className="ms-2">Add Product</span>
                        </NavLink>
                    </li> : " "}


                </ul>

            </div>
            <div className='dashboard-content'>

                <Outlet />

            </div>
        </div>
    );
};

export default Dashboard;