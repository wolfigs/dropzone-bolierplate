import {Link, Outlet} from "react-router-dom";

import userData from "../../utils/userData";

const user = userData();

const Layout = () => {


    const logout = () => {
        localStorage.removeItem("jwt");
        document.location.href = '/news/1';
    }


    return (
        <>
            <div className={"con-mid"}>
                <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
                    <div className={"nav-background con-mid"}/>
                    <div className={"nav-second-background con-mid"}/>
                    <div className={"container"}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"
                                 fill="none"
                                 className="css-1170n61">
                                <rect x="1" y="5" width="14" height="1.5" rx="1"
                                      fill="rgba(255, 255, 255, .9)"></rect>
                                <rect x="1" y="9" width="14" height="1.5" rx="1"
                                      fill="rgba(255, 255, 255, .9)"></rect>
                            </svg>
                        </button>
                        <a href={"/services/1"}><img src="/coduza_logo.png" style={{width: "50px"}}
                                                     alt="Coduza Logo"
                                                     id={"logo_link"}/></a>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {user.role ?
                                    <>
                                        <li className="nav-item con-mid">
                                            <a href={"/services/1"} className="nav-link">
                                                Services
                                            </a>
                                        </li>
                                        <li className="nav-item con-mid">
                                            <a href={"/add-service"} className="nav-link">
                                                + Black Hole
                                            </a>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item con-mid">
                                        <a href={"/services/1"} className="nav-link">
                                            Services
                                        </a>
                                    </li>
                                }
                            </ul>

                            <div className="navbar-nav ml-auto">
                                {user.role ?
                                    <li className="nav-item nav-testnet">
                                <span onClick={logout} className="nav-link logout-link mob-login-btn">
                                    Logout
                                </span>
                                    </li> :
                                    <li className="nav-item nav-testnet">
                                        <Link to={"/login"} className="nav-link mob-login-btn">
                                            Login
                                        </Link>
                                    </li>
                                }
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            <div className={"page-content"}>
                <Outlet/>
            </div>

        </>
    )
};

export default Layout;