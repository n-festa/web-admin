// import node module libraries
import { Col, Row, Container,Table } from 'react-bootstrap';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";
import { useRouter } from "next/router";

export async function getStaticProps() {
  	const res = await fetch(`${SERVER_BASE_URL}v1/categories`);
  	//const res = await fetch(`http://localhost:3000/api/v1/categories`);
  	const repo = await res.json();
  	return { props: { repo } };
}

const Categories = ({repo}) => {
	const router = useRouter();
	const data = repo.data;
	const result = data.result;
	if (!data) return <div>Loading...</div>
	

	async function deleteCate(id) {
		const res = await fetch(`${SERVER_BASE_URL}v1/categories/${id}`, {
		    method: 'DELETE',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		});
		const content = await res.json();
		if(content.type ==="success"){
			router.push('/categories');
		}
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Categories</h1>
						<div className="portlet-title">
							<div className="dt-buttons btn-group flex-wrap">
								<Link href="/category/create" className="btn btn-secondary action-item btn-primary">
									<i className="fa fa-plus"></i> Create
								</Link>
							</div>
						</div>

						<Table striped bordered hover>
						     <thead>
						        <tr >
						          <th>#</th>
						          <th>Name</th>
						          <th>Parent</th>
						          <th>Order</th>
						          <th>Operations</th>
						        </tr>
						    </thead>
						    <tbody>
							{result && result.map((item)=>
							    <tr key={item.id}>
							        <td>{item.id}</td>
							        <td>{item.name}</td>
							        <td>{item.parent}</td>
							        <td>{item.order}</td>
							        <td>
							          	<a href={`/category/${item.id}`} className="btn btn-sm btn-icon btn-primary me-2">
                        					<i className="fa fa-edit"></i>
    										<span className="sr-only">Edit</span>
										</a>

										<a href="#" onClick={()=> deleteCate(item.id)} className="btn btn-sm btn-icon btn-danger" >
                        					<i className="fa fa-trash"></i>
										    <span className="sr-only">Delete</span>
										</a>
							        </td>
							    </tr>
							) }
						   	</tbody>
						</Table>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default Categories;
