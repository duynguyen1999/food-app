import { Fragment } from 'react';
import ChickenTotal from "./ChickenTotal";
import AvailableChicken from "./AvailableChicken";


const Chickens = ()=>{
    return (
        <Fragment>  
            <ChickenTotal/>
            <AvailableChicken />
        </Fragment>
    );
};

export default Chickens;