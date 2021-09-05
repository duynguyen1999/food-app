import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import chickenImage from '../../components/assets/gaquay.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>ChickenFood</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={chickenImage} alt="A chicken !" />
        </div>
    </Fragment>);
};
export default Header;