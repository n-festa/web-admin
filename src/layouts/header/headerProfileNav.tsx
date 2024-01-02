import {Badge, Dropdown, Nav, NavItem,} from 'react-bootstrap'
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
			<div className="dropdown nav-item">
				Profile

			</div>
            
        </div>
	)
}

export default HeaderProfileNav


