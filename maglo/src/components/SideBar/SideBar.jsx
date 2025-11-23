import { useState } from 'react';
import Logo from '../../assets/logos/maglo-logo.svg';
import HomeLogo from '../../assets/logos/vector-home.svg';
import InvoicesLogo from '../../assets/logos/vector-invoices.svg';
import SettingLogo from '../../assets/logos/vector-settings.svg';
import TransactionLogo from '../../assets/logos/vector-transaction.svg';
import WalletLogo from '../../assets/logos/vector-wallet.svg';
import HomeLogoA from '../../assets/logos/vector-home-a.svg';
import InvoicesLogoA from '../../assets/logos/vector-invoices-a.svg';
import SettingLogoA from '../../assets/logos/vector-settings-a.svg';
import TransactionLogoA from '../../assets/logos/vector-transaction-a.svg';
import WalletLogoA from '../../assets/logos/vector-wallet-a.svg';
import { useAuth } from "../../context/AuthContext";
import './SideBar.scss'


const SideBar = () => {
    const { user,setUser } = useAuth();

    const SideBarMenu = [
        {
            menu: "Dashboard",
            icon: HomeLogo,
            iconActive: HomeLogoA
        },
        {
            menu: "Transactions",
            icon: TransactionLogo,
            iconActive: TransactionLogoA,
        },
        {
            menu: "Invoices",
            icon: InvoicesLogo,
            iconActive: InvoicesLogoA
        },
        {
            menu: "My Wallets",
            icon: WalletLogo,
            iconActive: WalletLogoA
        },
        {
            menu: "Settings",
            icon: SettingLogo,
            iconActive: SettingLogoA
        }
    ]
    const [isActive, setIsActive] = useState(0)

    const handleClick = (index) => {
        setIsActive(index)
    }

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        console.log(user)
        window.location.reload();
    }

    return (
        <div className="container-fluid sidebar h-100">
            <div className="sidebar-frame col-xl-12 d-none d-xl-flex bg-light vh-100 p-3 flex-column justify-content-between">
                <div>
                    <img src={Logo} />
                    <ul className="list-group mt-5">
                        {SideBarMenu.map((item, index) => (
                            <li
                                key={index}
                                className={`sidebar-item list-group-item border-0 d-flex align-items-center mb-2 ${isActive === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                <img src={isActive === index ? item.iconActive : item.icon} className='ml-4' /> {item.menu}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='sidebar-bottom'>
                    <ul className="list-group">
                        <li className="sidebar-bottom-item list-group-item border-0 d-flex align-items-center mb-2">
                            <i className="bi bi-question-circle me-2"></i> Help
                        </li>
                        <li onClick={handleLogOut} className="sidebar-bottom-item list-group-item border-0 d-flex align-items-center mb-2">
                            <i className="bi bi-box-arrow-right me-2"></i> Logout
                        </li>
                    </ul>
                </div>
            </div>


            <div className="d-block d-xl-none p-3">
                <label htmlFor="mobileSidebar" className="form-label fw-bold">
                    <img src={Logo} alt="Logo" />
                </label>
                <select
                    id="mobileSidebar"
                    className="form-select"
                    value={isActive}
                    onChange={(e) => setIsActive(Number(e.target.value))}
                >
                    {SideBarMenu.map((item, index) => (
                        <option key={index} value={index}>
                            {item.menu}
                        </option>
                    ))}
                </select>
            </div>


        </div>

    );
};
export default SideBar;