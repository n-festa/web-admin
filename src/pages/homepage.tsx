import Layout from '@layouts/layout'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InterestingFood from '@components/homePage/interesting_food';


export const getStaticProps = async ({ locale }:any) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
})


const HomePage =() =>{
	//translations from common.json
    const {t} = useTranslation('common');
    const {t: homeT} = useTranslation('home');
    const changeLanguage = (language: string) => {
        window.location.replace("/" + language)
    }

	return (
		<Layout>
	        <section className="d-flex flex-column container home-section">
	            <div className="search-item-wrapper d-flex">
			        <img className=""  alt=""   src="/images/searchmd.svg"   />
			        <input type="text" className="border-none search-item flex-grow-1" placeholder="Gõ tên món ăn, nhà hàng mà bạn đang muốn tìm" />
			    </div>
			    <div className="categories-container d-flex flex-column py-4 w-100">
			        <div className="mb-3 categories-wrapper w-100 d-flex justify-content-between">
			            <div className="category-card d-flex justify-content-center align-items-end"
			            	style={{
			            		backgroundImage: `url(/images/6387ec276a4eb.png)`,
			            		backgroundSize: `contain`
			            	}}
			                >
			                <div className="category-heading pb-2">Ăn nhẹ &lt; 300 kcal</div>
			            </div>
			            <div className="category-card d-flex justify-content-center align-items-end"
			            	style={{
			            		backgroundImage: `url(/images/6387ec276a4eb.png)`,
			            		backgroundSize: `contain`
			            	}}
			                >
			                <div className="category-heading pb-2">Ăn nhẹ &lt; 300 kcal</div>
			            </div>
			            <div className="category-card d-flex justify-content-center align-items-end"
			            	style={{
			            		backgroundImage: `url(/images/6387ec276a4eb.png)`,
			            		backgroundSize: `contain`
			            	}}
			                >
			                <div className="category-heading pb-2">Ăn nhẹ &lt; 300 kcal</div>
			            </div>
			            <div className="category-card d-flex justify-content-center align-items-end"
			            	style={{
			            		backgroundImage: `url(/images/6387ec276a4eb.png)`,
			            		backgroundSize: `contain`
			            	}}
			                >
			                <div className="category-heading pb-2">Ăn nhẹ &lt; 300 kcal</div>
			            </div>
			        </div>
			        <div className="pagination d-flex justify-content-end align-items-center">
			            <div className="carousel-arrow">
			                <img className="search-md-icon" alt=""   src="./public/chevronleft.svg"
			                />
			            </div>
			            <div className="pagination-dot-group">
			                <div className="pagination-dot-indicator active"></div>
			                <div className="pagination-dot-indicator"></div>
			                <div className="pagination-dot-indicator"></div>
			            </div>
			            <div className="carousel-arrow">
			                <img  className="search-md-icon"  alt=""  src="./public/chevronright.svg" />
			            </div>

			            <b className="get-all-button">Xem tất cả</b>
			        </div>
			    </div>
			    <InterestingFood />

		        <div className="outstanding-location-and-chef-section w-100 py-4">
			        <div className="title-section d-flex justify-content-between align-items-end w-100">
			            <div className="title-and-sub-title flex-grow-1 d-flex flex-column">
			                <div className="card-title">
			                    Bếp nổi bật tuần này
			                </div>
			                <div className="sub-title">
			                    Khám phá những quán ăn, đầu bếp nổi bật xung quanh bạn
			                </div>
			            </div>
			            <b className="get-all-button">Xem tất cả</b>
			        </div>

			        <div className="food-cards d-flex justify-content-between py-4">
			            <div className="food-card d-flex flex-column">
			                <div className="d-flex flex-column position-relative w-100" >
			                    <div className="media-wrapper d-flex justify-content-center"
			                         //style="background-image: url('./public/video-player.svg')"
			                    	style={{
				            		backgroundImage: `url(/images/video-player.svg)`,
				            		}}
			                        >
			                    </div>
			                </div>
			                <div className="card-info-wrapper d-flex flex-column position-relative">
			                    <div className="card-info d-flex flex-column gap-1">
			                        <div className="food-and-chef-name d-flex flex-column gap-1">
			                            <b>The Chef Town</b>
			                        </div>
			                        <div className="general-info d-flex gap-2">
			                            <div className="d-flex align-items-center gap-1">
			                                <img className=""   alt=""  src="/images/star-icon1.svg" />

			                                <div className="star text">4.5</div>
			                            </div>
			                            <div className="d-flex align-items-center gap-2px">
			                                <img className=""  alt=""  src="/images/markerpin021.svg"  />
			                                <div className="distance text">3,2 km</div>
			                            </div>
			                            <div className="d-flex align-items-center gap-2px">
			                                <img className=""  alt="" src="/images/timer.svg"/>
			                                <div className="minutes text">20 min</div>
			                            </div>
			                        </div>
			                        <div className="food-name-wrapper">
			                            <span className="font-weight-600">Eat Clean | Cơm nhật Tonkatsu</span
			                            >
			                        </div>
			                        <div className="discount-up-to-wrapper d-flex align-items-center gap-1">
			                            <img className=""
			                                 alt=""
			                                 src="/images/frame-2729.svg"
			                            />

			                            <div className="discount-up-to">Ưu đãi đến 50k</div>
			                        </div>
			                        <div className="flavor-time-wrapper d-flex align-items-center gap-1">
			                            <img className=""
			                                 alt=""
			                                 src="/images/frame-2725.svg"
			                            />

			                            <div className="flavor-time">
			                                Đặt trước 09:00 giờ sáng để điều chỉnh vị
			                            </div>
			                        </div>

			                        <div className="chay-available d-flex gap-1 align-items-center">
			                            <img src="/images/iconvegan.svg" alt="" />
			                            <span>Có bán món chay</span>
			                        </div>

			                        <div className="price-range">
			                            50,000 - 100,000đ
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
	        </section>
	        
	    </Layout>
	)
}

export default HomePage;