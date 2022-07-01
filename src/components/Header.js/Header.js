import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header(){
    return <div className={classes.header}>
        <ul>
            <li><NavLink to="/expenses" activeClassName={classes.active}>expenses</NavLink></li>
            <li><NavLink to="/new-expense" activeClassName={classes.active}>new expense</NavLink></li>
        </ul>
    </div>
}

export default Header;