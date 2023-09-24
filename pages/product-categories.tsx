import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";
import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../lib/utils/constant";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useRouter } from "next/router";
import React from "react";
import useSwr from "swr";
import fetcher from "../lib/utils/fetcher";

const ProductsCategories = () =>{

	let fetchURL = `${SERVER_BASE_URL}/categories`;	
	const { data, error } = useSwr(fetchURL, fetcher);
	if (error) return <div>Failed to load users</div>;
	if (!data) return <LoadingSpinner />;
	const result = data['data'];
	const cates = result['result'];
	console.log(cates);

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
						<div className="col-lg-3 dt-buttons btn-group flex-wrap">  
						 	<button className="btn btn-secondary action-item btn-primary" tabIndex="0" aria-controls="botble-blog-tables-post-table" type="button">
						 		<a href="/product-cate/create" className="text-white"><i className="fa fa-plus"></i> Create
								</a>
							</button> 
 						</div>
					</div>
					<div className="table-responsive">
						<Table bordered className="text-nowrap">
	    					<thead >
						        <tr>
						            <th scope="col">#</th>
						            <th scope="col">Name</th>
						            <th scope="col">Icon</th>
						            <th scope="col">Default</th>
						            <th scope="col">Order</th>
						            <th scope="col">Featured</th>
						            <th>OPERATIONS</th>
						        </tr>
						    </thead>
						    <tbody>
						    	{cates?.map((cate, index) => (
						  			<tr key={cate.id}>
						  				<td scope="row">{index}</td>
							            <td> {cate.name}</td>
							            <td></td>
							            <td>{cate.is_default}</td>
							            <td>{cate.order}</td>
							           	<td>{cate.is_featured}</td>
							            <td>
							            	<div className="table-actions">
											    <a data-bs-toggle="tooltip" data-bs-original-title="Edit" href={`/product-cate/${cate.id}`}  className="btn btn-sm btn-icon btn-primary mr-2">
											        <i className="fa fa-edit mr-2"></i>
											   	 	<span className="sr-only">Edit</span>
												</a>

											    <a data-bs-toggle="tooltip" data-bs-original-title="Delete" href="#" className="btn btn-sm btn-icon btn-danger" data-dt-single-action="" data-method="DELETE" data-confirmation-modal="true" data-confirmation-modal-title="Confirm delete" data-confirmation-modal-message="Do you really want to delete this record?" data-confirmation-modal-button="Delete" data-confirmation-modal-cancel-button="Cancel">
											        <i className="fa fa-trash"></i>
											    	<span className="sr-only">Delete</span>
												</a>
											</div>
							            </td>
						  			</tr>	
						      	))}
						    </tbody>
						</Table>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductsCategories;