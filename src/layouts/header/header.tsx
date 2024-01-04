import Link from "next/link";
import Breadcrumb from "@layouts/breadcrumb"
import HeaderNotificationNav from "@layouts/header/headerNotificationNav";
import HeaderProfileNav from "@layouts/header/headerProfileNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
type HeaderProps ={
	toggleSidebar:() => void;
	toggleSidebarMd:() =>void;
}

//export default function Header(props:HeaderProps){
const Header = (props:HeaderProps) =>{
//	console.log(faBars);
	const { toggleSidebar, toggleSidebarMd} = props;
	return (
		<header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
			<div className="container-fluid header-navbar d-flex align-items-center">
				<button  type="button" 
					className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none btn btn-link"
					onClick={toggleSidebar}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<button type="button" 
					className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none btn btn-link"
					onClick={toggleSidebarMd}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className="header-nav ms-auto">
		          	<HeaderNotificationNav />
		        </div>
		        <div className="header-nav ms-2">
		          	<HeaderProfileNav />
		        </div>
			</div>
			<div className="header-divider border-top my-2 mx-sm-n2" />
			<div className="container-fluid">
				<Breadcrumb />
			</div>
		</header>

	)
}

export default Header