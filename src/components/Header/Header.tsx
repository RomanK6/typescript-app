import React from "react";
import { NavLink } from "react-router-dom";
import favicon from "../../logo.svg";
import styles from "./Header.module.scss";
import { connect } from 'react-redux';
import { redusersType } from "../../redux/store";
import { getMenuIsOpen } from './../../redux/burger-reducer';


interface IBurgerProps {
    menuIsOpen: boolean;
    getMenuIsOpen: (arg: boolean) => void
}

const Header: React.FC<IBurgerProps> = (props) => {

    return <div className={styles.header_wrapper}>
        <header>
            <div>
                <div id='burgerbutton' className={!props.menuIsOpen? styles.burgerBtn : styles.burgerBtn + ' ' + styles.active} onClick={() => {props.getMenuIsOpen(props.menuIsOpen)}} ><span></span></div>
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

const mapStateToProps = (state: redusersType) => {
    return {
        menuIsOpen: state.burgerReducer.menuIsOpen
    }
}

export default connect( mapStateToProps, { getMenuIsOpen } )(Header);