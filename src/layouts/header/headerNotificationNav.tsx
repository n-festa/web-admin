import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {faBasketShopping,faChartBar,faGaugeHigh,faList,faUserMinus,faUserPlus,} from '@fortawesome/free-solid-svg-icons'
import {Badge, Dropdown, DropdownDivider, DropdownHeader,DropdownItem, DropdownMenu,DropdownToggle, Nav,NavItem,NavLink,ProgressBar,} from 'react-bootstrap'
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
				<Dropdown>
					<DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
			            <FontAwesomeIcon icon={faBell} size="lg" />
			            <Badge pill bg="danger" className="position-absolute top-0 right-0">
			              5
			            </Badge>
			         </DropdownToggle>
					<DropdownMenu className="pt-0" align="end">
            			<DropdownHeader className="bg-light fw-bold rounded-top">You have 5 notifications</DropdownHeader>
			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem>
			                	<ItemWithIcon icon={faUserPlus}>
			                  	New user registered
			               		</ItemWithIcon>
			              	</DropdownItem>
			            </Link>
			            <Link href="#" passHref legacyBehavior>
				            <DropdownItem>
				                <ItemWithIcon icon={faChartBar}>
				                  Sales report is ready
				                </ItemWithIcon>
				            </DropdownItem>
			            </Link>
          			</DropdownMenu>
				</Dropdown>
			</div>
            <div className="nav-item">
	            <Dropdown>
			        <DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-task">
			            <FontAwesomeIcon icon={faList} size="lg" />
			            <Badge pill bg="warning" className="position-absolute top-0 right-0">
			              5
			            </Badge>
			        </DropdownToggle>
			          <DropdownMenu className="pt-0" align="end">
			            <DropdownHeader className="bg-light fw-bold rounded-top">You have 5 pending tasks</DropdownHeader>

			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem>
			                	<small className="d-flex">
			                  		<div>Upgrade Next.JS</div>
			                  		<div className="ms-auto">0%</div>
			                	</small>
			                	<ProgressBar
			                  		className="progress-thin mt-2"
			                  		variant="primary"
			                  		now={0}
			                	/>
			              	</DropdownItem>
			            </Link>
			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem>
				                <small className="d-flex">
				                  <div>Train Pokemons</div>
				                  <div className="ms-auto">25%</div>
				                </small>
				                <ProgressBar
				                  className="progress-thin mt-2"
				                  variant="danger"
				                  now={25}
				                />
			              	</DropdownItem>
			            </Link>
			            <DropdownDivider />

			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem className="text-center fw-bold">View all tasks</DropdownItem>
			            </Link>

			          </DropdownMenu>
		        </Dropdown>
            </div>
            <div className="nav-item">
            	<Dropdown>
		          	<DropdownToggle as={NavLink} bsPrefix="hide-caret" id="dropdown-mail">
		            	<FontAwesomeIcon icon={faEnvelope} size="lg" />
		            	<Badge pill bg="primary" className="position-absolute top-0 right-0">
		              	4
		            	</Badge>
		          	</DropdownToggle>
          			<DropdownMenu className="pt-0" align="end">
            			<DropdownHeader className="bg-light fw-bold rounded-top">You have 4 messages</DropdownHeader>
            			<Link href="#" passHref legacyBehavior>
              				<DropdownItem>
				                <div className="message">
				                  	<div className="py-3 me-3 float-start">
				                    	<div className="avatar d-inline-flex position-relative">
				                     		<Image
						                        fill
						                        className="rounded-circle"
						                        src="/assets/img/avatars/1.jpg"
						                        alt="user@email.com"
						                      />
				                    	</div>
				                  	</div>
				                  	<div>
					                    <small className="text-muted">John Doe</small>
					                    <small className="text-muted float-end mt-1">Just now</small>
				                  	</div>
				                  	<div className="text-truncate font-weight-bold">
				                    	{' '}
				                    	Pet Pikachu
				                  	</div>
				                </div>
              				</DropdownItem>
            			</Link>
			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem>
			                	<div className="message">
			                  		<div className="py-3 me-3 float-start">
			                    		<div className="avatar d-inline-flex position-relative">
					                      	<Image
					                        fill
					                        className="rounded-circle"
					                        src="/assets/img/avatars/2.jpg"
					                        alt="user@email.com"
					                      	/>
			                    		</div>
			                  		</div>
					                <div>
					                    <small className="text-muted">John Doe</small>
					                    <small className="text-muted float-end mt-1">5 mins ago</small>
					                </div>
				                  	<div className="text-truncate font-weight-bold">
				                    Dress Eevee
				                  	</div>
			                	</div>
			              	</DropdownItem>
			            </Link>
			            <Link href="#" passHref legacyBehavior>
			              	<DropdownItem>
			                	<div className="message">
			                  		<div className="py-3 me-3 float-start">
			                    		<div className="avatar d-inline-flex position-relative">
			                      			<Image
						                        fill
						                        className="rounded-circle"
						                        src="/assets/img/avatars/3.jpg"
						                        alt="user@email.com"
						                     />
			                    		</div>
			                  		</div>
			                  		<div>
					                    <small className="text-muted">John Doe</small>
					                    <small className="text-muted float-end mt-1">1:52 PM</small>
					                </div>
					                <div className="text-truncate font-weight-bold">
					                    Team up training
					                </div>
			                	</div>
			              	</DropdownItem>
			            </Link>
          			</DropdownMenu>
        		</Dropdown>
            </div>
        </div>
	)
}

export default HeaderNotificationNav
