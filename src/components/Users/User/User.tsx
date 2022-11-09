import { NavLink } from 'react-router-dom';
import { IUser } from "../../../types/user-types";
import styles from "./User.module.scss";


interface IPropsUser {
    key: number;
    user: IUser;
}

const User: React.FC<IPropsUser> = (props) => { 

    return <div className={styles.wrapper}>
        <img src="https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg" alt="avatar" />
        <div>
            <h3>{props.user.username}</h3>
            <NavLink to={`/profile/${props.user.id}`} >profile</NavLink>
        </div>
    </div>
    }

export default User;