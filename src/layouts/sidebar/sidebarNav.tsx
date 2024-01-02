import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {PropsWithChildren, useContext, useEffect, useState,} from 'react'
import classNames from "classnames";
import Link from "next/link";
import {IconDefinition,} from '@fortawesome/free-regular-svg-icons'
import {Accordion, AccordionContext,useAccordionButton} from 'react-bootstrap'
import {
  faBug,
  faCalculator,
  faChartPie,
  faChevronUp, faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

type SidebarNavItemProps = {
	href: string;
	icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props:SidebarNavItemProps) =>{
	const { icon, children, href } = props;

	return(
		<div className="nav-item">
			<Link href={href} passHref legacyBehavior >
				<a className="nav-link px-3 py-2 d-flex align-items-center" >
				{icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            		: <span className="nav-icon ms-n3" />}
            	{children}
            	</a>
			</Link>	
		</div>
	)
}

const SidebarNavTitle = ( props: PropsWithChildren) =>{
	const { children } = props;
	return (
		<li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
	)
}

type SidebarNavGroupToggleProps = {
	eventKey : string;
	icon: IconDefinition;
	setIsShow: (isShow:boolean) => void
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
	const { activeEventKey } = useContext(AccordionContext);
	const {eventKey, icon, children, setIsShow} = props;

	const decoratedOnClick = useAccordionButton(eventKey);
	const isCurrentEventKey = activeEventKey === eventKey;

	useEffect(() => {
		setIsShow(activeEventKey === eventKey )	
	},[activeEventKey, eventKey, setIsShow ])

	return(
		<button  type="button" 
			className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
        		collapsed: !isCurrentEventKey,
      		})}
      		onClick={ decoratedOnClick}
		>
			<FontAwesomeIcon className="nav-icon ms-n3" icon={icon}/>
			{children} 

			<div className="nav-chevron ms-auto text-end">
				<FontAwesomeIcon size="xs" icon={faChevronUp} />		
			</div>
		</button>
	)
}

type SidebarNavGroupProps = {
	toggleIcon: IconDefinition;
	toggleText: string;
} & PropsWithChildren

const SidebarNavGroup = (props: SidebarNavGroupProps) =>{
	const { toggleIcon, toggleText, children } = props;

	const [isShow, setIsShow] = useState(false);

	return(
		<Accordion as="li" bsPrefix="nav-group" className={classNames({show:isShow})}>
			<SidebarNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
			<Accordion.Collapse eventKey="0">
				<ul className="nav-group-items list-unstyled">
					{children}
				</ul>
			</Accordion.Collapse>
		</Accordion>
	)
}

export default function SidebarNav(){
	return(
		<ul className="list-unstyled">
			<SidebarNavItem href="/" icon={faGauge}>
				Dashboard
			</SidebarNavItem>
			<SidebarNavTitle>Theme</SidebarNavTitle>

			<SidebarNavTitle>Components</SidebarNavTitle>
			<SidebarNavGroup toggleIcon={faPuzzlePiece} toggleText="Base">
		        <SidebarNavItem href="#">Accordion</SidebarNavItem>
		        <SidebarNavItem href="#">Breadcrumb</SidebarNavItem>
		        <SidebarNavItem href="#">Cards</SidebarNavItem>
		        <SidebarNavItem href="#">Carousel</SidebarNavItem>
		        <SidebarNavItem href="#">Collapse</SidebarNavItem>
		        <SidebarNavItem href="#">List group</SidebarNavItem>
		        <SidebarNavItem href="#">Navs</SidebarNavItem>
		        <SidebarNavItem href="#">Pagination</SidebarNavItem>
		        <SidebarNavItem href="#">Popovers</SidebarNavItem>
		        <SidebarNavItem href="#">Progress</SidebarNavItem>
		        <SidebarNavItem href="#">Scrollspy</SidebarNavItem>
		        <SidebarNavItem href="#">Spinners</SidebarNavItem>
		        <SidebarNavItem href="#">Tables</SidebarNavItem>
		        <SidebarNavItem href="#">Tabs</SidebarNavItem>
		        <SidebarNavItem href="#">Tooltips</SidebarNavItem>
      		</SidebarNavGroup>

      		<SidebarNavGroup toggleIcon={faLocationArrow} toggleText="Buttons">
		        <SidebarNavItem href="#">Buttons</SidebarNavItem>
		        <SidebarNavItem href="#">Buttons Group</SidebarNavItem>
		        <SidebarNavItem href="#">Dropdowns</SidebarNavItem>
		    </SidebarNavGroup>
		</ul>
	)
}


