import Link from 'next/link';
const CheckLogin =() =>{
    /*
    if(user){
        return(
            <div className="user-avatar position-relative">
                <img src="/images/avatar.png" alt="avatar" />
                <ul className="submenu">
                    <li><Link href="#">Shop Details</Link></li>
                    <li><Link href="#">Shoping Cart</Link></li>
                    <li><Link href="#">Check Out</Link></li>
                    <li><Link href="#">Blog Details</Link></li>
                </ul>
            </div>
        );
    }*/

    return(
        <div className="navigation-actions d-flex align-items-center">
            <Link className="login-button padding-lg border-radius-5xs" href="/login">
                <span className="font-weight-600">Đăng nhập</span>
            </Link>
        </div>
    );
}

export default CheckLogin;

