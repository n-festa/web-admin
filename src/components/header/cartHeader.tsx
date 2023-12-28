import { useState } from 'react';

const CartHeader = () =>{ 
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    //setStep
    return (
        <div className="nav-item-button" onClick={handleShow}>
            <img className="" alt="" src="/images/shoppingbag03.svg"/>
            {/*

            <span className="cart-item-number">
                            2
            </span>
            */}
            
        </div>
    )
}

export default CartHeader