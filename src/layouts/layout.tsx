import React, {PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useResizeDetector } from 'react-resize-detector'
import Head from "next/head";
import Sidebar  from "@layouts/sidebar/sidebar";
import Header from "@layouts/header/header";
import Footer from "@layouts/footer/footer";


export default function AdminLayout({ children } : PropsWithChildren){

	const [isShowSidebar, setIsShowSidebar ] = useState(false);
	const [isShowSidebarMd, setIsShowSidebarMd ] = useState(true);

	const toggleIsShowSidebar = () => {
    	setIsShowSidebar(!isShowSidebar)
  	}

  	const toggleIsShowSidebarMd = () =>{
  		const newValue = !isShowSidebarMd;
  		localStorage.setItem('isShowSidebarMd', newValue ? 'true' : 'false')
   	 	setIsShowSidebarMd(newValue)
  	}

  	// Clear and reset sidebar
  	const resetIsShowSidebar = () =>{
  		setIsShowSidebar(false);
  	}

  	const onResize = useCallback(() =>{
  		resetIsShowSidebar();	
  	},[]);

  	// On first time load only
  	useEffect(() => {
    	if (localStorage.getItem('isShowSidebarMd')) {
	      	setIsShowSidebarMd(localStorage.getItem('isShowSidebarMd') === 'true')
	    }
  	}, [setIsShowSidebarMd])

  	return(

		<div className="app-main">
			<Head>
			    <title>Admin</title>
			    <link rel="icon" href="/images/logo.ico" />
			</Head>

			<Sidebar isShow={isShowSidebar} isShowMd={isShowSidebarMd }/>
			
		    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
		      	<Header toggleSidebar={toggleIsShowSidebar} toggleSidebarMd={toggleIsShowSidebarMd} />
		        <div className="body flex-grow-1 px-sm-2 mb-4">
		        	<div className="container-lg">
		        		{children}
		        	</div>
			            
			    </div>
			    <Footer />
		    </div>
		</div>
	)
}