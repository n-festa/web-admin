import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import {
	HoverableRowsCode,
} from 'data/code/TablesCode';
import { HighlightCode }  from 'widgets';

const Admins = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="hoverable-rows" className="mb-4 row align-items-center justify-content-center">
						<div class="col-12 text-center text-sm-start col-sm-auto col-lg mb-3">
							Showing 
							<span class="fw-semibold">1</span> to
							<span class="fw-semibold">20</span> of<span class="fw-semibold">151</span> 
							results
						</div>
						<div class="col-auto ms-sm-auto mb-3">
							Rows per page: 
							<select aria-label="Item per page" class="d-inline-block w-auto form-select">
								<option value="20" selected="">20</option>
								<option value="50">50</option>
								<option value="100">100</option>
								<option value="250">250</option>
							</select>
						</div>
						<div class="col-auto ms-sm-auto mb-3 overflow-auto">
							<ul class="pagination mb-0" role="navigation" aria-label="Pagination">
								<li class="page-item"><a class="page-link" tabindex="0" role="button" aria-disabled="false" aria-label="Previous page" rel="prev">‹</a></li>
								<li class="page-item active"><a role="button" class="page-link" tabindex="0" aria-label="Page 1">1</a></li>
								<li class="page-item"><a rel="prev" role="button" class="page-link" tabindex="0" aria-label="Page 2">2</a></li>
								<li class="page-item "><a role="button" class="page-link" tabindex="-1" aria-label="Page 3 is your current page" rel="canonical" aria-current="page">3</a></li>
								<li class="page-item"><a role="button" class="page-link" tabindex="0" aria-label="Page 4" rel="next">4</a></li>
								<li class="page-item"><a class="page-link" role="button" tabindex="0" aria-label="Jump forward">...</a></li>
								<li class="page-item"><a role="button" class="page-link" tabindex="0" aria-label="Page 8">8</a></li>
								<li class="page-item"><a class="page-link" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">›</a>
								</li>
							</ul>
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
						        <tr>
						            <th scope="row">1</th>
						            <td>Mark</td>
						            <td>Otto</td>
						            <td>@mdo</td>
						            <td></td>
						            <td></td>
						            <td></td>
						        </tr>
						        <tr>
						            <th scope="row">2</th>
						            <td>Jacob</td>
						            <td>Thornton</td>
						            <td>@fat</td>
						            <td></td>
						            <td></td>
						            <td></td>
						        </tr>
						        <tr>
						            <th scope="row">3</th>
						            <td colSpan="2">Larry the Bird</td>
						            <td>@twitter</td>
						            <td></td>
						            <td></td>
						            <td></td>
						        </tr>
						    </tbody>
						</Table>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

//Admins.Layout = AuthLayout;
export default Admins;