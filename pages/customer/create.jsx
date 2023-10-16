import React, { useState } from 'react'
import { useRouter } from "next/router";
import { Col, Row, Container } from 'react-bootstrap';

const MemberCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [name, setName] =useState('');
	
	const router = useRouter();

	async function onSubmit(event){
		event.preventDefault()
	 	setIsLoading(true)
    	setError(null) 
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Member</h1>
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
	    							<input className="form-control" placeholder="Name" name="name" type="text"  id="name" onChange={(e)=>setName(e.target.value)}/>
	        					</div>	

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">UserName</label>    
	    							<input className="form-control" placeholder="UserName" name="username" type="text"  id="username" />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Email</label>    
	    							<input className="form-control" placeholder="Email" name="email" type="email"  id="email" />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Phone</label>    
	    							<input className="form-control" placeholder="Phone" name="phone" type="text"  id="phone" />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Password</label>    
	    							<input className="form-control" placeholder="Password" name="password" type="password"  id="password" />
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
						            <button className="btn btn-success" name="submit" type="submit" >
						                <i className="fa fa-check-circle"></i> Save
						            </button>
						        </div>
						    </div>
						</div>
						<div className="form-side-meta-boxes">
							<div class="widget meta-boxes">
							    <div class="widget-title">
							        <h4><label for="status" class="control-label required" aria-required="true">Status</label></h4>
							    </div>
							    <div class="widget-body">
							        <div class="ui-select-wrapper form-group ">
								        <select class="form-control ui-select" v-pre="" required="required" id="status" name="status" aria-required="true">
									        <option value="activated">Activated</option>
									        <option value="locked">Locked</option>
								        </select>
									    <svg class="svg-next-icon svg-next-icon-size-16">
									        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									            <path d="M10 16l-4-4h8l-4 4zm0-12L6 8h8l-4-4z"></path>
									        </svg>
									    </svg>
									</div>
                            	</div>
                        	</div>
						</div>
					</div>
				</Row>
			</form>
		</Container>
	);
}

export default MemberCreate