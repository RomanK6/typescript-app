import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { connect } from 'react-redux';
import { redusersType } from "../../redux/store";


interface ISidebarProps {
    menuIsOpen: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ menuIsOpen }) => {
    
    return <div className={!menuIsOpen? styles.wrapper : styles.wrapper + ' ' + styles.activeSideBar}>
        
        <ul>
            <NavLink to="/posts" className={styles.link} >posts</NavLink>
            <NavLink to="/users" className={styles.link} >users</NavLink>
        </ul>
    </div>
    }

    const mapStateToProps = (state: redusersType) => {
        return {
            menuIsOpen: state.burgerReducer.menuIsOpen
        }
    }

export default connect( mapStateToProps, {} )(Sidebar);