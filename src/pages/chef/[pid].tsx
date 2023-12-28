import Layout from '@layouts/layout'
import Breadcrumb from '@components/breadcrumb'
import Cart from '@components/cart'
const ChefDetail =() =>{
	return (
		<Layout>
			<section className="chef-detail-and-card-info-section d-flex container">
    			<div className="chef-detail-wrapper flex-grow-1">
					<Breadcrumb />

					<div className="chef-image-wrapper d-flex gap-2">
            <div className="primary-image">
                <img src="/images/Rectangle.png" alt="" />
            </div>
            <div className="secondary-images">
                <img src="/images/unsplash_nmpW_WwwVSc.png" alt=""/>
                <img src="/images/unsplash_6fHRzS9yMj0.png" alt=""/>
                <img src="/images/unsplash_inDRPMBfX8M.png" alt=""/>
            </div>
        </div>

        <div className="chef-info mt-3 py-3">
            <div className="title d-flex justify-content-between">
                <div className="heading d-flex flex-column">
                    <div className="primary-title">
                        The Chef Town
                    </div>
                    <div className="secondary-title">
                        Eat clean | Cơm Nhật Tonkatsu
                    </div>
                </div>

                <div className="rating-and-promo d-flex flex-column px-3">
                    <div className="rating d-flex gap-2">
                        <div className="d-flex gap-1">
                            <img src="/images/star-icon.svg" alt="" />
                            <div className="text">4.5 (+100)</div>
                        </div>

                        <div className="d-flex gap-1">
                            <img src="/images/marker-pin-02.svg" alt=""/>
                            <div className="text">3,2 km</div>
                        </div>

                        <div className="d-flex gap-1">
                            <img src="/images/timer.svg" alt=""/>
                            <div className="text">20 min</div>
                        </div>
                    </div>
                    <div className="promo d-flex gap-1">
                        <img src="/images/frame-2729.svg" alt=""/>
                        <div className="text">Ưu đãi đến 50k</div>
                    </div>
                    <div className="adjust-flavor-time  d-flex gap-1">
                        <img src="/images/frame-2725.svg" alt="" />
                        <div className="text">Đặt trước 09:00 giờ sáng để điều chỉnh vị</div>
                    </div>
                </div>
            </div>

            <div className="description mt-3">
                <span className="content">Giới thiệu về quán - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt dsdsut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ueli
                    incididunt uelitincididu nttemp
                </span>
                <div>
                    <span>......</span>
                    <span className="expand-more">xem thêm</span>
                </div>
            </div>
        </div>
				</div>
				
				<Cart />
			</section>
	    </Layout>
	)
}

export default ChefDetail;