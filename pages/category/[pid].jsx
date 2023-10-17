// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import { useRouter } from "next/router";
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../../utils/constant";
import React, { useState,useEffect  } from 'react'

export const getServerSideProps = async ({ query }) => {
	const pid = query.pid;

	const res = await fetch(`${SERVER_BASE_URL}v1/categories/${pid}`);
	const repo = await res.json();
   return {
	  props: {
			repo,
	  },
	}
}

const CategoryDetail = ({repo}) => {
	const [name, setName] =useState('');
	const [description, setDescription] =useState('');
	const router = useRouter();

	const data = repo.data;
	const result = data.result;
	if (!data) return <div>Loading...</div>

	async function onSubmit(event){
		event.preventDefault()

    	try {
			if (name!="" && description != "" ) {
			 	const formData = {
		          	name: name,
		          	description: description,
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
	    }
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3">
						<h1 className="mb-0 h2 fw-bold">CategoryDetail</h1>
						
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
	        					<div className="form-group mb-3">
	            					<label htmlFor="description" className="control-label required" aria-required="true">Description</label>    
	    							<textarea className="form-control" value={result.description} rows="4" placeholder="Short description"  name="description" cols="50" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
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
					</div>
				</Row>
			</form>
		</Container>
	);
};

export default CategoryDetail;
