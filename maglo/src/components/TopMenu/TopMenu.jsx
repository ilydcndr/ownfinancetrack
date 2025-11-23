import { useAuth } from "../../context/AuthContext"
import Notify from '../../assets/logos/notify.svg'
import Search from '../../assets/logos/search.svg'
import "./Topmenu.scss"

const TopMenu = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="d-none d-xl-block topmenu-title navbar-brand fw-semibold">
                Dashboard
            </div>

            <div className="ms-auto d-flex align-items-center gap-3">

                <button type="button" className="btn border-0">
                    <img src={Notify} width={24} height={24}/>
                </button>

                <button type="button" className="btn border-0">
                    <img src={Search} width={24} height={24}/>
                </button>

                <div className="dropdown">
                    <button
                        className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
                        type="button"
                        id="userDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={user?.image || "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"}
                            alt="User"
                            className="rounded-circle"
                            width={36}
                            height={36}
                        />
                        <span className="fw-semibol navbar-username">{user?.fullName || "User Name"}</span>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li>
                            <button className="dropdown-item" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopMenu;
