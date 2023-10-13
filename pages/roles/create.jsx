// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../../utils/constant";
import React, { useState } from 'react'

const AdminCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	async function onSubmit(event) {
	    event.preventDefault()
	 	setIsLoading(true)
    	setError(null) // Clear previous errors when a new request starts
	    
	    const formData = new FormData(event.target);
	    console.log(formData);
	 	/*
	    const response = await fetch(`http://api.2all.com.vn/api/v1/role`, {
	      	method: 'POST',
	      	headers: {
		        "Content-Type": "application/x-www-form-urlencoded",
		      },
	      	body: formData,
	    })
	 */
	    // Handle response if necessary
	   // const data = await response.json()
	    // ...
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Roles</h1>
						</div>
					</div>
				</Col>
			</Row>
			<form onSubmit={onSubmit}>
				<Row>
					<div className="col-md-8 col-12">
						<div className="main-form">
	                    	<div className="form-body">
	                    		<div className="form-group mb-3 position-relative">
	            					<label htmlFor="name" className="control-label required" aria-required="true">Name</label>    
	    							<input className="form-control" placeholder="Name" name="name" type="text"  id="name" />
	        					</div>	
	        					<div className="form-group mb-3">
	            					<label htmlFor="description" className="control-label required" aria-required="true">Description</label>    
	    							<textarea className="form-control" rows="4" placeholder="Short description"  name="description" cols="50" id="description"></textarea>
	        					</div>
	        				</div>
	                	</div>
					</div>
					<div className="col-md-4 right-sidebar d-flex flex-column-reverse flex-md-column">
						<div className="widget meta-boxes form-actions form-actions-default action-horizontal">
	    					<div className="widget-title">
	        					<h4>
			                        <span>Publish</span>
			        			</h4>
	    					</div>
						    <div className="widget-body">
						        <div className="btn-set">
						            <button className="btn btn-info" name="submit" type="submit" value="save">
						                    <i className="fa fa-save"></i> Save &amp; Exit
						                </button>
						                        &nbsp;
						            <button className="btn btn-success" name="submit" type="submit" value="apply">
						                <i className="fa fa-check-circle"></i> Save
						            </button>
						        </div>
						    </div>
						</div>
					</div>
				</Row>
			</form>
		</Container>
	);
};

export default AdminCreate;
