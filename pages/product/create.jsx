import React, { useState } from 'react'
import { useRouter } from "next/router";
import { Col, Row, Container } from 'react-bootstrap';

const ProductCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [name, setName] =useState('');
	const router = useRouter();

	async function onSubmit(event){
		event.preventDefault()
	 	setIsLoading(true)
    	setError(null) 
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Product</h1>
						</div>
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
	    							<input className="form-control" placeholder="Name" name="name" type="text"  id="name" onChange={(e)=>setName(e.target.value)}/>
	        					</div>	
	        					<div className="form-group mb-3">
	            					<label htmlFor="description" className="control-label required" aria-required="true">Description</label>    
	    							<textarea className="form-control" rows="4" placeholder="Short description"  name="description" cols="50" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
	        					</div>

								<div className="form-group mb-3">
									<label htmlFor="images[]" className="control-label">Images</label>
									<div className="gallery-images-wrapper list-images">	
										<div className="images-wrapper">
											<div className="text-center cursor-pointer js-btn-trigger-add-image default-placeholder-gallery-image " data-name="images[]">
												<img src="https://shopwise.botble.com/vendor/core/core/base/images/placeholder.png" alt="Image" width="120" />
											</div>
    									</div>
										<a className="add-new-gallery-image js-btn-trigger-add-image" data-name="images[]" href="#">Add image</a>
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
							        <h4><label htmlFor="status" className="control-label required" aria-required="true">Status</label></h4>
							    </div>
							    <div className="widget-body">
							        <div className="ui-select-wrapper form-group ">
								        <select className="form-control ui-select" v-pre="" required="required" id="status" name="status" aria-required="true">
									        <option value="published">Published</option>
									        <option value="draft">Draft</option>
											<option value="pending">Pending</option>
								        </select>
									    <svg className="svg-next-icon svg-next-icon-size-16">
									        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									            <path d="M10 16l-4-4h8l-4 4zm0-12L6 8h8l-4-4z"></path>
									        </svg>
									    </svg>
									</div>
                            	</div>
                        	</div>
						</div>
						<div className="widget meta-boxes">
							<div className="widget-title">
                                <h4><label htmlFor="categories[]" className="control-label">Categories</label></h4>
                            </div>
							<div className="widget-body">

							</div>
						</div>
						<div className="widget meta-boxes">
                            <div className="widget-title">
                                <h4><label htmlFor="image" className="control-label">Featured image (optional)</label></h4>
                            </div>
                            <div className="widget-body">
                                <div className="image-box">
									<input className="image-data" name="image" type="hidden" value="" />
										<div className="preview-image-wrapper ">
										<img className="preview_image" data-default="https://shopwise.botble.com/vendor/core/core/base/images/placeholder.png" src="https://shopwise.botble.com/vendor/core/core/base/images/placeholder.png" alt="Preview image" width="150" />
										<a className="btn_remove_image" title="Remove image">
											<i className="fa fa-times"></i>
										</a>
									</div>
									<div className="image-box-actions">
										<a className=" btn_gallery " data-result="image" data-action="select-image" data-allow-thumb="1" href="#">
											Choose image
										</a>
									</div>
								</div>
                            </div>
                        </div>
					</div>
				</Row>
			</form>
		</Container>
	);
}

export default ProductCreate