import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";
// import authlayout to override default layout
import {HoverableRowsCode,} from 'data/code/TablesCode';
import { HighlightCode }  from 'widgets';

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { usePageState } from "../../lib/context/PageContext";
import {
  usePageCountState,
  usePageCountDispatch,
} from "../../lib/context/PageCountContext";
import useViewport from "../../lib/hooks/useViewport";
import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";


const Admins = () => {
	let selectedOptionId = 0;
	const page = usePageState();
	const pageCount = usePageCountState();
	const setPageCount = usePageCountDispatch();

	let fetchURL = `${SERVER_BASE_URL}/admin`;	
	const { data, error } = useSWR(fetchURL, fetcher);

	if (error) {
	    return (
	      <div className="col-md-9">
	        <div className="feed-toggle">
	          <ul className="nav nav-pills outline-active"></ul>
	        </div>
	        <ErrorMessage message="Cannot load recent articles..." />
	      </div>
	    );
	  }

	if (!data) return <LoadingSpinner />;

	const users = data['data']['result'];
	if (users && users.length === 0) {
	    return <div className="">No articles are here... yet.</div>;
	}

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
						 		<a href="/admins/users/create" className="text-white"><i class="fa fa-plus"></i> Create
								</a>
							</button> 
 						</div>
					</div>
					<div className="table-responsive">
						<Table bordered className="text-nowrap">
	    					<thead >
						        <tr>
						            <th scope="col">#</th>
						            <th scope="col">Username</th>
						            <th scope="col">Email</th>
						            <th scope="col">Role</th>
						            <th scope="col">Created At</th>
						            <th scope="col">Status</th>
						            <th>OPERATIONS</th>
						        </tr>
						    </thead>
						    <tbody>
						    	{users?.map((user, index) => (
						  			<tr key={user.id}>
						  				<th scope="row">{index}</th>
							            <td>{user.name}</td>
							            <td>{user.email}</td>
							            <td></td>
							            <td></td>
							            <td></td>
							            <td>
							            	<div className="table-actions">
											    <a data-bs-toggle="tooltip" data-bs-original-title="Edit" href={`/admins/users/${user.id}`}  className="btn btn-sm btn-icon btn-primary mr-2">
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
					<div id="hoverable-rows" className="mb-4 row align-items-center justify-content-center">
						<div className="col-12 text-center text-sm-start col-sm-auto col-lg mb-3">
							Showing 
							<span className="fw-semibold">1</span> to
							<span className="fw-semibold">20</span> of<span className="fw-semibold">151</span> 
							results
						</div>
						<div className="col-auto ms-sm-auto mb-3">
							Rows per page: 
						</div>
						<div className="col-auto ms-sm-auto mb-3 overflow-auto">
							<ul className="pagination mb-0" role="navigation" aria-label="Pagination">
								<li className="page-item"><a className="page-link" tabIndex="0" role="button" aria-disabled="false" aria-label="Previous page" rel="prev">‹</a></li>
								<li className="page-item active"><a role="button" className="page-link" tabIndex="0" aria-label="Page 1">1</a></li>
								<li className="page-item"><a rel="prev" role="button" className="page-link" tabIndex="0" aria-label="Page 2">2</a></li>
								<li className="page-item "><a role="button" className="page-link" tabIndex="-1" aria-label="Page 3 is your current page" rel="canonical" aria-current="page">3</a></li>
								<li className="page-item"><a role="button" className="page-link" tabIndex="0" aria-label="Page 4" rel="next">4</a></li>
								<li className="page-item"><a className="page-link" role="button" tabIndex="0" aria-label="Jump forward">...</a></li>
								<li className="page-item"><a role="button" className="page-link" tabIndex="0" aria-label="Page 8">8</a></li>
								<li className="page-item"><a className="page-link" tabIndex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">›</a>
								</li>
							</ul>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

//Admins.Layout = AuthLayout;
export default Admins;