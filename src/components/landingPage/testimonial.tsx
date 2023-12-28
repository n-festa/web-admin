import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import React from 'react';

const Testimonial = () => {
    const pagination = {
        el: '.pagination',
        clickable: true,
        renderBullet: function ( index:any,className:any) {
            return '<div className="pagination-dot-indicator ' + className + '">' + (index + 1) + '</div>'
        },
      };
    return(
       
        <section className="rating-and-review-section d-flex justify-content-center">
            <div className="rating-and-review-container container d-flex flex-column align-items-center">
                <b className="heading">Mọi người yêu thích 2All</b>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper" 
                    pagination={pagination} navigation={{
                        prevEl: '.paginator-arrow',
                        nextEl: '.paginator-arrow-next',
                    }}
                    modules={[Navigation,Pagination]}
                    spaceBetween={20}
                >
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “1. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “2. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “3. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “4. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “5. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rating-review-card d-flex flex-column gap-3">
                            <div className="review">
                                “6. Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                                nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                                và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                            </div>

                            <div className="stars">
                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />

                                <img className="small-icon"
                                     alt=""
                                     src="/images/star-icon2.svg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="paginator d-flex justify-content-end mt-5">
                    <div className="paginator-arrow">
                        <img className="small-icon"
                             alt=""
                             src="/images/chevronleft.svg"
                        />
                    </div>
    
                    <div className="pagination"/>
                    <div className="paginator-arrow-next">
                        <img className="small-icon"
                             alt=""
                             src="/images/chevronright.svg"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
};


export default Testimonial;
