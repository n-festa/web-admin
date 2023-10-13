// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import React, { useState } from 'react'
import axios from "axios";
import qs from "qs";  
const AdminCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
  	const [error, setError] = useState(null)
 	
	async function onSubmit(event) {
	    const url = "http://api.2all.com.vn/api/v1/role";
	    let data = {
	      name: "testuser@gmail.com",
	    };
	    let options = {
	      method: "POST",
	      headers: { "content-type": "application/x-www-form-urlencoded" },
	      data: qs.stringify(data),
	      url
	    };
	    axios(options)
	      .then(res => {
	        console.log("yeh we have", res.data);
	      })
	      .catch(er => {
	        console.log("no data sorry ", er);
	      });
	  };

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">AdminCreate</h1>
							<div>
						      	{error && <div style={{ color: 'red' }}>{error}</div>}
						      <form onSubmit={onSubmit}>
						        <input type="text" name="name" />
						        <button type="submit" disabled={isLoading}>
						          {isLoading ? 'Loading...' : 'Submit'}
						        </button>
						      </form>
    						</div>
						</div>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default AdminCreate;
