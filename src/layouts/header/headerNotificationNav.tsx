import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {faBasketShopping,faChartBar,faGaugeHigh,faList,faUserMinus,faUserPlus,} from '@fortawesome/free-solid-svg-icons'
import {Badge, Dropdown, Nav, NavLink, ProgressBar,} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'

type ItemWithIconProps = {
  	icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  	const { icon, children } = props

  	return (
	    <>
	      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
	      {children}
	    </>
  	)
}
const HeaderNotificationNav = () =>{

	return(
		<div className="nav">
			<div className="nav-item">
				<div className="dropdown">
					<Link id="dropdown-notification" aria-expanded="false" role="button" className="hide-caret nav-link" tabIndex={0} href="#">
						<FontAwesomeIcon icon={faBell} size="lg" />
						
					</Link>
				</div>
			</div>
            
        </div>
	)
}

export default HeaderNotificationNav
