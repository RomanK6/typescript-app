import React from "react";
import { NavLink } from "react-router-dom";
import favicon from "../../logo.svg";
import styles from "./Header.module.scss";


const Header: React.FC = (props) => {
    return <div className={styles.header_wrapper}>
        <header>
            <div>
                <NavLink to="" className={styles.NavLink}>
                    <img src={favicon} alt="logo" />
                    <h2>
                        ts-react-app
                    </h2>
                </NavLink>
            </div>
            

            <div>
                <NavLink to="/login" className={styles.NavLink}>Login</NavLink>
            </div>
        </header>
    </div>
        
    }

export default Header;