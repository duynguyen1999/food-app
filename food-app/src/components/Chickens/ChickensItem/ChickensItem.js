import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import ChickensForm from './ChickensForm';
import classes from './ChickensItem.module.css';


const ChickensItem = props => {

    const cartCtx = useContext(CartContext);

    const price  = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <ChickensForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default ChickensItem;