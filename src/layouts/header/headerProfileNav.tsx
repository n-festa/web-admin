import {Badge,Dropdown,DropdownDivider,DropdownHeader,DropdownItem,DropdownMenu,DropdownToggle,Nav,NavItem,} from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell,faCreditCard,faEnvelopeOpen,faFile,faMessage,faUser,} from '@fortawesome/free-regular-svg-icons'
import { PropsWithChildren } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGear, faListCheck, faLock, faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import HeaderLogout from '@layouts/header/headerLogout'

type ItemWithIconProps ={
	icon: IconDefinition
}& PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps)=>{
	const {icon, children } = props;
	
	return (
		<>
			<FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
			{children}
		</>
	)
}

const HeaderProfileNav = () =>{
	const router = useRouter();

	const logout = async() =>{
		const res = await axios.post("api/mock/logout");
		if(res.status === 200 ){
			router.push("/login");
		}
	}

	return(
		<div className="nav">
			<Dropdown as={NavItem}>
		        <DropdownToggle variant="link" bsPrefix="hide-caret" className="py-0 px-2 rounded-0" id="dropdown-profile">
		          	<div className="avatar position-relative">
			            <Image
			              fill
			              sizes="32px"
			              className="rounded-circle"
			              src="/assets/img/avatars/8.jpg"
			              alt="user@email.com"
			            />
		          	</div>
		        </DropdownToggle>
        		<DropdownMenu className="pt-0">
        			<DropdownHeader className="bg-light fw-bold rounded-top">Account</DropdownHeader>
        			<Link href="#" passHref legacyBehavior>
			            <DropdownItem>
			              	<ItemWithIcon icon={faBell}>
				                Updates
				                <Badge bg="info" className="ms-2">42</Badge>
			              	</ItemWithIcon>
			            </DropdownItem>
			        </Link>
			        <Link href="#" passHref legacyBehavior>
			            <DropdownItem>
			              <ItemWithIcon icon={faUser}>Profile</ItemWithIcon>
			            </DropdownItem>
			        </Link>
			        <Link href="#" passHref legacyBehavior>
			            <DropdownItem>
			              <ItemWithIcon icon={faGear}>Settings</ItemWithIcon>
			            </DropdownItem>
			        </Link>
			        <HeaderLogout>
			            <DropdownItem>
			              <ItemWithIcon icon={faPowerOff}>Logout</ItemWithIcon>
			            </DropdownItem>
			        </HeaderLogout>
        		</DropdownMenu>
      		</Dropdown>
        </div>
	)
}

export default HeaderProfileNav


