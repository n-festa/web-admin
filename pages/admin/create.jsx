// import node module libraries
import { Col, Row, Container} from 'react-bootstrap';
import React, { useState } from 'react'
import { useRouter } from "next/router";
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../../utils/constant";
const AdminCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
  	const [error, setError] = useState(null)
 	const [name, setName] =useState('');
 	const [username, setUserName] =useState('');
 	const [phone, setPhone] =useState('');
 	const [email, setEmail] =useState('');
 	const [password, setPassword] =useState('');
 	const [passwordconfirm, setPasswordConfirm] =useState('');
 	const router = useRouter();
 	
	async function onSubmit(event) {
	    event.preventDefault()
	    setIsLoading(true)
	    setError(null) 
	 	try {
			if (name!="" && username != "" && phone !="" && email != "" && password != "" && password === passwordconfirm) {
			 	const formData = {
		          	name: name,
		          	username: username,
		          	phone: phone,
		          	email: email,
		          	password: password
		      	}
		      	const add = await fetch(`${SERVER_BASE_URL}v1/admin`, {
			        method: 'POST',
			        headers: {
			          'Content-Type': 'application/json'
			        },
			        body: JSON.stringify(formData)
			    });

			    const content = await add.json();
			    console.log(content);
			    if(content.type ==="success"){
			        router.push('/admin');
			    }
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
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Admin Create</h1>
						</div>
					</div>
				</Col>
			</Row>
			<form onSubmit={onSubmit}>
				<Row>
					<div className="col-md-8 col-12">
						<div className="main-form">
	                    	<div className="form-body">
	                    		<div className="row">
                                    <div className="form-group mb-3 col-md-6">
					           		 	<label htmlFor="first_name" className="control-label required" aria-required="true"> Name</label>    
					    				<input className="form-control" name="name" type="text" id="name" onChange={(e)=>setName(e.target.value)} />
        							</div>
    
                                    <div className="form-group mb-3 col-md-6">
							            <label htmlFor="last_name" className="control-label required" aria-required="true">User Name</label>    
							    		<input className="form-control" name="username" type="text" id="username" onChange={(e)=>setUserName(e.target.value)}  />
        							</div>
                               	</div>

                               	<div className="row">
                                    <div className="form-group mb-3 col-md-6">
					           		 	<label htmlFor="first_name" className="control-label required" aria-required="true"> Phone</label>    
					    				<input className="form-control"  name="phone" type="text" id="phone" onChange={(e)=>setPhone(e.target.value)}/>
        							</div>
    
                                    <div className="form-group mb-3 col-md-6">
							            <label htmlFor="last_name" className="control-label required" aria-required="true">Email</label>    
							    		<input className="form-control" name="email" type="email"  id="email" onChange={(e)=>setEmail(e.target.value)} />
        							</div>
                               	</div>

                               	<div className="row">
                                    <div className="form-group mb-3 col-md-6">
					           		 	<label htmlFor="first_name" className="control-label required" aria-required="true"> Password</label>    
					    				<input className="form-control" name="password" type="password"  id="password" onChange={(e)=>setPassword(e.target.value)} />
        							</div>
    
                                    <div className="form-group mb-3 col-md-6">
							            <label htmlFor="last_name" className="control-label required" aria-required="true">Re-type password</label>    
							    		<input className="form-control"  name="re-password" type="password" id="re-password" onChange={(e)=>setPasswordConfirm(e.target.value)} />
        							</div>
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
	            		 	<div className="widget meta-boxes">
	                            <div className="widget-title">
	                                <h4><label htmlFor="role_id" className="control-label">Role</label></h4>
	                            </div>
								<div className="widget-body">
								    <div defaultValue='0' className="ui-select-wrapper form-group ">
								        <select className="form-control roles-list ui-select" v-pre="" id="role_id" name="role_id">
									        <option value="0" selected="selected">Select role</option>
									        <option value="1">Admin</option>
								        </select>
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

export default AdminCreate;
