import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";


const Sidebar: React.FC = () => {
    return <div className={styles.wrapper}>
        <NavLink to="/posts" className={styles.link} >posts</NavLink>
    </div>
    }

export default Sidebar;