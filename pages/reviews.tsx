import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const Reviews = () =>{
	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="hoverable-rows" className="mb-4 row align-items-center justify-content-center">
						<div className="col-lg-3 d-none d-md-none d-lg-block">
							<form className="d-flex align-items-center">
								<input placeholder="Search" type="search" className="form-control" />
							</form>
						</div>
						<div class="col-lg-3 dt-buttons btn-group flex-wrap">  
						 	<button class="btn btn-secondary action-item btn-primary" tabindex="0" aria-controls="botble-blog-tables-post-table" type="button">
						 		<a href="/" className="text-white"><i class="fa fa-plus"></i> Create
								</a>
							</button> 
 						</div>
					</div>
				Reviews
				</Col>
			</Row>
		</Container>
	)
}

export default Reviews;