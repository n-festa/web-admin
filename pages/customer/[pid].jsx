// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import { useRouter } from "next/router";
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../../utils/constant";
import React, { useState,useEffect  } from 'react'

export const getServerSideProps = async ({ query }) => {
	const pid = query.pid;

	const res = await fetch(`${SERVER_BASE_URL}v1/customer/${pid}`);
	const repo = await res.json();
   return {
	  props: {
			repo,
	  },
	}
}

const CustomerDetail = ({repo}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [name, setName] =useState('');
	const [username, setUserName] =useState('');
	const [email, setEmail] =useState('');
	const [phone, setPhone] =useState('');
	const [password, setPassword] =useState('');
	const router = useRouter();

	const data = repo.data;
	const result = data.result;
	if (!data) return <div>Loading...</div>

	async function onSubmit(event){
		event.preventDefault()
	 	setIsLoading(true)
    	setError(null) 

    	try {
			if (name!="" && username != "" && phone !="" && email != "" && password != "" ) {
			 	const formData = {
		          	name: name,
		          	username: username,
		          	phone: phone,
		          	email: email,
		          	password: password
		      	}
				/*
		      	const add = await fetch(`${SERVER_BASE_URL}v1/customer`, {
			        method: 'POST',
			        headers: {
			          'Content-Type': 'application/json'
			        },
			        body: JSON.stringify(formData)
			    });

			    const content = await add.json();
			    console.log(content);
			    if(content.type ==="success"){
			        router.push('/customers');
			    }*/
			}
		}catch (error) {
	      	console.error(error)
	    }finally {
	      	setIsLoading(false)
	    }
	}
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 ">
						<h1 className="mb-0 h2 fw-bold">CustomerDetail</h1>
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
	    							<input className="form-control" value={result.name} placeholder="Name" name="name" type="text"  id="name" onChange={(e)=>setName(e.target.value)}/>
	        					</div>	

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">UserName</label>    
	    							<input className="form-control" value={result.username} placeholder="UserName" name="username" type="text"  id="username" onChange={(e)=>setUserName(e.target.value)} />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Email</label>    
	    							<input className="form-control" value={result.email} placeholder="Email" name="email" type="email"  id="email" onChange={(e)=>setEmail(e.target.value)} />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Phone</label>    
	    							<input className="form-control" value={result.phone} placeholder="Phone" name="phone" type="text"  id="phone" onChange={(e)=>setPhone(e.target.value)} />
	        					</div>

	        					<div className="form-group mb-3 position-relative">
	            					<label htmlFor="username" className="control-label required" aria-required="true">Password</label>    
	    							<input className="form-control" value={result.password} placeholder="Password" name="password" type="password"  id="password" onChange={(e)=>setPassword(e.target.value)}/>
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
};

export default CustomerDetail;
