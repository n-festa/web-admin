import React, { useState } from 'react'
import { useRouter } from "next/router";
import { Col, Row, Container } from 'react-bootstrap';

const VoucherCreate = () => {
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
							<h1 className="mb-0 h2 fw-bold">Voucher</h1>
						</div>
					</div>
				</Col>
			</Row>
			<form onSubmit={onSubmit}>
				<Row>
					<div className="col-md-8 col-12">
						<div className="main-form">
							<div className="pd-all-20 ws-nm">
								<label className="title-product-main text-no-bold">
									<span>Create coupon code</span>
								</label>
								<a href="#" className="btn-change-link float-end">Generate coupon code</a>
								<div className="form-group mt15 mb0">
									<input type="text" className="next-input coupon-code-input" name="code" />
									<p className="type-subdued mt5 mb0">Customers will enter this coupon code when they checkout. </p>
								</div>
							</div>

							<div class="pd-all-20 border-top-color">
								<label class="title-product-main text-no-bold block-display">Select type of discount</label>
								<div class="ui-select-wrapper width-200-px-rsp-768 mt15">
									<select class="ui-select" id="select-promotion" name="type">
										<option value="coupon">Coupon code</option>
										<option value="promotion">Promotion</option>
									</select>
								</div>
								<div class="form-group mt15 mb0">
									<label class="next-label">
										<input type="checkbox" name="can_use_with_promotion" value="1"/>
										<span class="pre-line">Can be used with promotion?</span>
									</label>
								</div>
								<div class="form-group mb0 mt15">
									<label>
									<input type="checkbox" name="is_unlimited" value="1" />Unlimited coupon?
									</label>
								</div>
								<div class="form-group mb0 mt15" >
									<label class="text-title-field">Enter number</label>
									<div class="limit-input-group ">
										<input type="text" class="form-control pl5 p-r5 is-valid" name="quantity" autocomplete="off" disabled="" />
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
					</div>
				</Row>
			</form>
		</Container>
	);
}

export default VoucherCreate
