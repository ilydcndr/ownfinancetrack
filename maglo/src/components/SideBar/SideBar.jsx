import { useState } from 'react';
import Logo from '../../assets/logos/maglo-logo.svg';
import './SideBar.scss'

const SideBar = () => {
    const SideBarMenu = ["Dashboard", "Transactions", "Invoices", "My Wallets"]
    const[isActive,setIsActive]= useState(0)

    const handleClick = (index) => {
        setIsActive(index)
    }

    return (
        <div className="container-fluid sidebar">
            <div className="sidebar-frame col-md-12 d-none d-md-flex bg-light vh-100 p-3 flex-column justify-content-between">
                <div>
                    <img src={Logo}/>
                    <ul className="list-group mt-5">
                        {SideBarMenu.map((item, index) => (
                            <li
                                key={index}
                                className={`sidebar-item list-group-item border-0 d-flex align-items-center mb-2 ${isActive === index ? 'active' : ''}`}
                                onClick={()=>handleClick(index)}
                            >
                                <i className="bi bi-house-door me-2"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='sidebar-bottom'>
                    <ul className="list-group">
                        <li className="sidebar-bottom-item list-group-item border-0 d-flex align-items-center mb-2">
                            <i className="bi bi-question-circle me-2"></i> Help
                        </li>
                        <li className="sidebar-bottom-item list-group-item border-0 d-flex align-items-center mb-2">
                            <i className="bi bi-box-arrow-right me-2"></i> Logout
                        </li>
                    </ul>
                </div>
            </div>


            <div className="d-block d-md-none p-3">
                <label for="mobileSidebar" className="form-label fw-bold">Maglo.</label>
                <select id="mobileSidebar" className="form-select">
                    <option value="dashboard" selected>Dashboard</option>
                    <option value="transactions">Transactions</option>
                    <option value="invoices">Invoices</option>
                    <option value="wallets">My Wallets</option>
                    <option value="settings">Settings</option>
                    <option value="help">Help</option>
                    <option value="logout">Logout</option>
                </select>
            </div>

        </div>

    );
};
export default SideBar;