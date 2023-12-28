import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
import CartModel from '@components/cart/cart_model';
import CheckLogin from '@components/header/checkLogin';
import CartHeader from '@components/header/cartHeader';

type HeaderType = {
    isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    

    const router = useRouter();
    const arrayPaths = ['/']; 
    const [onTop, setOnTop] = useState(( !arrayPaths.includes("/router.pathname")|| isErrorPage ) ? false : true);
    const [pageLogin] = useState(( router.pathname == "/login" ) ? true : false);
    
    const headerClass = () => {
        if(window.pageYOffset === 0) {
          setOnTop(true);
        } else {
          setOnTop(false);
        }
    }

    useEffect(() => {
        if(!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }
    
        headerClass();
        window.onscroll = function() {
          headerClass();
        };
    }, []);


    return(
        <section className={`header-section d-flex justify-content-center   ${!onTop ? 'site-header--fixed' : ''}`}>
            <div className="header-container container w-100 d-flex justify-content-between align-items-center gap-5">
                <img className="star-icon" alt="" src="/images/menu03.svg"/>
                <div className="menu-header navbar">
                    <div className="d-flex gap-2 logo">
                        <img className="" alt="" src="/images/logo1.svg" />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <CartHeader />
                    
                    {/* 
                    <div className="user-avatar position-relative">
                        <img src="/images/avatar.png" alt="avatar" />
                        <ul className="submenu">
                            <li><Link href="#">Shop Details</Link></li>
                            <li><Link href="#">Shoping Cart</Link></li>
                            <li><Link href="#">Check Out</Link></li>
                            <li><Link href="#">Blog Details</Link></li>
                        </ul>
                    </div>
                    */}
                    <CheckLogin />
                    <div className="d-flex gap-1">
                        <div className="font-weight-500">VIE</div>
                        <img className="" alt="" src="/images/vn.svg"/>
                    </div>
                </div>

            </div>

            <CartModel setShow={setShow} show={show}/>
            
        </section>
    )
};


export default Header;
