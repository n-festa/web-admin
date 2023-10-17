// import node module libraries
import { Col, Row, Container , Tab, Tabs} from 'react-bootstrap';
import { useRouter } from "next/router";
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../../utils/constant";
import React, { useState,useEffect  } from 'react'
import Image from 'next/image'

export const getServerSideProps = async ({ query }) => {
  	const pid = query.pid;

  	const res = await fetch(`${SERVER_BASE_URL}v1/admin/${pid}`);
  	const repo = await res.json();
 	return {
	    props: {
	      	repo,
	    },
  	}
}


const AdminDetail = ({repo}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true)
  	const [error, setError] = useState(null)
  	const [id, setID] =useState('');
 	const [name, setName] =useState('');
 	const [phone, setPhone] =useState('');
 	const [password, setPassword] =useState('');
 	const [passwordconfirm, setPasswordConfirm] =useState('');
 	

	const data = repo.data;
	const result = data.result;
	if (!data) return <div>Loading...</div>

	useEffect(()=>{
	    if(result){
	    	setID(result.id)
	        setName(result.name)
	        setPhone(result.phone)
	    }
	},[result,isLoading])
	
	async function onSubmit(event) {
	    event.preventDefault()
	    setIsLoading(true)
	    setError(null) 
	 	try {
			 	const formData = {
			 		id: id,
		          	name: name,
		          	phone: phone,
		      	}
		      	console.log(formData);
		      /*	
		      	const add = await fetch(`${SERVER_BASE_URL}v1/admin/${result.id}`, {
			        method: 'POST',
			        headers: {
			          'Content-Type': 'application/json'
			        },
			        body: JSON.stringify(formData)
			    });

			    const content = await add.json();
			    if(content.type ==="success"){
			        router.push('/admin');
			    }*/
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
							<h1 className="mb-0 h2 fw-bold">Admin Profile</h1>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<div className="col-md-3 crop-avatar">
					<div className="mt-element-card mt-card-round mt-element-overlay">
						<div className="profile-userpic mt-card-item">
							<div className="avatar-view mt-card-avatar mt-overlay-1 position-relative" data-bs-original-title="" title="">
                            	<Image width="150" height="150" src="data:image/png;base64,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" alt="avatar" />
                                <div className="mt-overlay">
                                    <ul className="mt-info">
                                        <li>
                                            <a className="btn default btn-outline" href="javascript:;">
                                                <i className="edit-icon nav-icon fe fe-edit"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
							<div className="mt-card-content text-center mt-1">
		                        <h3 className="card-name">{result.name}</h3>
		                    </div>
						</div>
					</div>
				</div>
				<div className="col-md-9 col-12">
					<div className="main-form">
	                    <div className="profile-content">
	                     	<Tabs defaultActiveKey="home"  id="uncontrolled-tab-example"  className="mb-3">
							    <Tab eventKey="home" title="User profile">
							    	<form onSubmit={onSubmit}>
							    		<div className="row">
		                                    <div className="form-group mb-3 col-md-6">
							           		 	<label htmlFor="user_name" className="control-label required" aria-required="true"> Name</label>    
							    				<input className="form-control"  name="name" type="text" defaultValue={result.name} id="name" onChange={(e)=>setName(e.target.value)}/>
		        							</div>
		    
		                                    <div className="form-group mb-3 col-md-6">
									            <label htmlFor="last_name" className="control-label required" aria-required="true">Phone</label>    
									    		<input className="form-control" name="phone" type="text" defaultValue={result.phone} id="phone" onChange={(e)=>setPhone(e.target.value)} />
		        							</div>
		                               	</div>
		                               	<div className="form-group mb-3 col-12">
										    <div className="form-actions">
										        <div className="btn-set text-center">
										            <button className="btn btn-success" name="submit" type="submit" value="submit">
										                <i className="fa fa-check-circle"></i> Update
										            </button>
										        </div>
										    </div>
										</div>
							    	</form>
							    </Tab>
							    <Tab eventKey="profile" title="Change password">
							        <form >
							    		<div className="row">
		                                    <div className="form-group mb-3 col-md-6">
							           		 	<label htmlFor="first_name" className="control-label required" aria-required="true"> Password</label>    
							    				<input className="form-control" name="password" type="password" value="" id="password" />
		        							</div>
		    
		                                    <div className="form-group mb-3 col-md-6">
									            <label htmlFor="last_name" className="control-label required" aria-required="true">Re-type password</label>    
									    		<input className="form-control"  name="re-password" type="password" value="" id="re-password" />
		        							</div>
		                               	</div>
		                               	<div className="form-group mb-3 col-12">
										    <div className="form-actions">
										        <div className="btn-set text-center">
										            <button className="btn btn-success" name="submit" type="submit" value="submit">
										                <i className="fa fa-check-circle"></i> Update
										            </button>
										        </div>
										    </div>
										</div>
							    	</form>
							    </Tab>
							    
							</Tabs>
	                	</div>
					</div>
				</div>
			</Row>
			
		</Container>
	);
};

export default AdminDetail;
