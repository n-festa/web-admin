import React, { useEffect, useState } from "react";
import classNames from "classnames";
import SidebarNav from "./sidebarNav"

const Sidebar = (props:{ isShow:boolean; isShowMd: boolean}) => {
	//console.log(props);
	const { isShow, isShowMd } = props;
	const [isNarrow, setIsNarrow ] = useState(false);

	const toggleIsNarrow = () => {
		const newValue = !isNarrow;
		localStorage.setItem('isNarrow', newValue ? 'true' : 'false');
		setIsNarrow(newValue);
	}

	//on first time load only
	useEffect(() =>{
		if(localStorage.getItem('isNarrow')) {
			setIsNarrow(localStorage.getItem('isNarrow') === 'true')
		}
	},[setIsNarrow]);

	return(
		<div className={classNames('sidebar d-flex flex-column position-fixed h-100',{
			'sidebar-narrow' : isNarrow,
			show:isShow,
			'md-hide' : !isShowMd,
		})}
			id="sidebar"
		>	
			<div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
				<svg className="sidebar-brand-full"  width="118" height="46" >
          			<title>CoreUI Logo</title>
          			<use xlinkHref="/assets/brand/coreui.svg#full" />
        		</svg>
			</div>
            <div className="sidebar-nav flex-fill">
            	<SidebarNav />
            </div>
        </div>
	)
}

export default Sidebar