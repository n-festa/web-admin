import Layout from '@layouts/layout'
import Breadcrumb from '@components/breadcrumb'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Testimonial from '@components/landingPage/testimonial'
import AddToCart from '@components/cart/add_to_cart'

const FoodDetail =() =>{
	return (
		<Layout>
			<Breadcrumb />

			<section className="food-detail-info-section container d-flex gap-2">
			    <div className="food-image-wrapper d-flex gap-2">
			        <div className="d-flex flex-column gap-2">
			            <img className="food-thumbnail" src="/images/food1.png" alt="" />
			            <img className="food-thumbnail" src="/images/food2.png" alt=""/>
			            <img className="food-thumbnail" src="/images/food3.png" alt=""/>
			        </div>

			        <div className="food-image">
			            <img src="/images/food_default.png" alt=""/>
			        </div>
			    </div>
			    <div className="food-detail-info px-3 flex-grow-1">
			        <div className="title">Mỳ Cá Cờ Sốt Yakitori</div>
			        <div className="by-restaurant">
			            <span className="by">by</span>
			            <span className="restaurant">The Bistro Thảo Điền</span>
			        </div>

			        <div className="d-flex flex-column gap10">
			            <div className="general-info d-flex align-items-center">
			                <div className="count-left d-flex align-items-center gap-1">
			                    <img className="small-icon-24" src="/images/timer.svg" alt="" />
			                    <span className="general-info-text">Còn 5 phần</span>
			                </div>

			                <div className="sold-item d-flex align-items-center gap-1">
			                    <img className="small-icon-18" src="/images/receipt-check.svg" alt=""/>
			                    <span className="general-info-text">Đã bán 50+</span>
			                </div>

			                <div className="rating d-flex align-items-center gap-1">
			                    <img className="small-icon-24" src="/images/star-icon.svg" alt=""/>
			                    <span className="general-info-text">Nhận xét 100+</span>
			                </div>
			            </div>

			            <div className="pricing-wrapper d-flex align-items-center gap-2">
			                <div className="price-before">95,000</div>
			                <b className="price-after">80,000</b>
			            </div>

			            <div className="discount d-flex align-items-center gap-1">
			                <img className="small-icon-24" src="/images/frame-2729.svg" alt=""/>
			                <span className="general-info-text">Ưu đãi đến 50k</span>
			            </div>

			            <div className="archive d-flex align-items-center gap-1">
			                <img className="small-icon-24" src="/images/archive.svg" alt="" />
			                <span className="general-info-text">Đóng gói bằng hộp bã mía (+3,000đ)</span>
			            </div>

			            <div className="order-time d-flex align-items-center gap-1">
			                <img className="small-icon-24" src="/images/frame-2725.svg" alt="" />
			                <span className="general-info-text">Đặt trước 09:00 giờ sáng để điều chỉnh vị</span>
			            </div>

			            <div className="vitamin d-flex justify-content-between">
			                <div className=" d-flex flex-column gap-1 align-items-center">
			                    <div className="label">Calories</div>
			                    <div className="value">366 Kcal</div>
			                </div>
			                <div className=" d-flex flex-column gap-1 align-items-center">
			                    <div className="label">Carb</div>
			                    <div className="value">16gr</div>
			                </div>
			                <div className=" d-flex flex-column gap-1 align-items-center">
			                    <div className="label">Protein</div>
			                    <div className="value">4gr</div>
			                </div>
			                <div className=" d-flex flex-column gap-1 align-items-center">
			                    <div className="label">Fat</div>
			                    <div className="value">2.7gr</div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

			<section className="ingredient-and-description-section container d-flex flex-column mt-2">
			    <Tabs defaultActiveKey="ingredient" className="tab-group d-flex w-100 mt-3" >
			      	<Tab eventKey="ingredient" title="Thành phần">
			        	<div className="ingredient-detail d-flex align-items-center">
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Cá Cờ</span>
					            <span className="value">200gr</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Gừng băm</span>
					            <span className="value">1/2 Muỗng cà phê</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Mỳ rau củ</span>
					            <span className="value">150gr</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Tỏi băm</span>
					            <span className="value">1/2 muỗng cà phê</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Sốt Yakitori</span>
					            <span className="value">2 muỗng cà phê</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Hành lá</span>
					            <span className="value">1 muỗng cà phê</span>
					        </div>
					        <div className="ingredient d-flex flex-column">
					            <span className="name">Bó xôi</span>
					            <span className="value">50gr</span>
					        </div>
			    		</div>
			      	</Tab>
			      	<Tab eventKey="description" title="Mô tả">
			      		<div className="food-description">
			      			Tab content for description
			      		</div>
			      	</Tab>
			    </Tabs>
			    
			    <div className="choose-ingredient-wrapper d-flex flex-column">
			        <div className="portion-size">
			            <div className="title mb-3">
			                Chọn khẩu phần
			            </div>
			            <div className="ingredient-options-wrapper px-4 d-flex flex-column gap-3">
			                <div className="d-flex gap-3">
			                    <div className="label">Cá Cờ</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            150g
			                        </button>
			                        <button className="ingredient-option active">
			                            200g
			                        </button>
			                        <button className="ingredient-option">
			                            250g
			                        </button>
			                    </div>
			                </div>
			                <div className="d-flex gap-3">
			                    <div className="label">Mỳ rau củ</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            150g
			                        </button>
			                        <button className="ingredient-option active">
			                            200g
			                        </button>
			                        <button className="ingredient-option">
			                            250g
			                        </button>
			                    </div>
			                </div>
			                <div className="d-flex gap-3">
			                    <div className="label">Bó xôi</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            25g
			                        </button>
			                        <button className="ingredient-option active">
			                            50g
			                        </button>
			                        <button className="ingredient-option">
			                            75g
			                        </button>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="adjust-taste">
			            <div className="title mb-3">
			                Điều chỉnh vị (Trước 9h sáng)
			            </div>
			            <div className="ingredient-options-wrapper px-4 d-flex flex-column gap-3">
			                <div className="d-flex gap-3">
			                    <div className="label">Mặn</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            Không mặn
			                        </button>
			                        <button className="ingredient-option active">
			                            Ít mặn
			                        </button>
			                        <button className="ingredient-option">
			                            Nguyên bản
			                        </button>
			                        <button className="ingredient-option">
			                            Mặn mà
			                        </button>
			                    </div>
			                </div>
			                <div className="d-flex gap-3">
			                    <div className="label">Ngọt</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            Không ngọt
			                        </button>
			                        <button className="ingredient-option active">
			                            Ít ngọt
			                        </button>
			                        <button className="ingredient-option">
			                            Nguyên bản
			                        </button>
			                        <button className="ingredient-option">
			                            Ngọt nhiều
			                        </button>
			                    </div>
			                </div>
			                <div className="d-flex gap-3">
			                    <div className="label">Cay</div>
			                    <div className="ingredient-options d-flex gap-3">
			                        <button className="ingredient-option">
			                            Không cay
			                        </button>
			                        <button className="ingredient-option active">
			                            Ít cay
			                        </button>
			                        <button className="ingredient-option">
			                            Nguyên bản
			                        </button>
			                        <button className="ingredient-option">
			                            Cay nhiều
			                        </button>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="other-adjustments">
			            <div className="title mb-3">
			                Điều chỉnh khác
			            </div>
			            <div className="ingredient-options-wrapper d-flex gap-4">
			                <div className="left d-flex flex-column gap-3 px-4">
			                    <div className="d-flex gap-3">
			                        <div className="label">Không hành</div>
			                        <label className="switch">
			                            <input type="checkbox" />
			                            <span className="slider round"></span>
			                        </label>
			                    </div>
			                    <div className="d-flex gap-3">
			                        <div className="label">Không thêm ớt</div>
			                        <label className="switch">
			                            <input type="checkbox" />
			                            <span className="slider round"></span>
			                        </label>
			                    </div>
			                </div>

			                <div className="right d-flex flex-column gap-3 px-4">
			                    <div className="d-flex gap-3">
			                        <div className="label">Không giá</div>
			                        <label className="switch">
			                            <input type="checkbox" />
			                            <span className="slider round"></span>
			                        </label>
			                    </div>
			                    <div className="d-flex gap-3">
			                        <div className="label">Không tiêu</div>
			                        <label className="switch">
			                            <input type="checkbox" />
			                            <span className="slider round"></span>
			                        </label>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="notes">
			            <div className="title mb-3">
			                Ghi chú
			            </div>
			            <textarea className="note-area" placeholder="Ví dụ: Dị ứng với đậu phọng "></textarea>
			        </div>
			    </div>
			</section>
			<Testimonial />
			<AddToCart />
	    </Layout>
	)
}

export default FoodDetail;