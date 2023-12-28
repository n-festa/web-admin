import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

type CartType = {
	show:any
  	setShow: any;
};

const CartModel =({show, setShow }: CartType) =>{
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	return (
	    <Modal show={show} onHide={handleClose}>
            <div className="title"> Giỏ đồ ăn </div>
            <div className="cart-delivery-time">
                Thời gian nhận đồ ăn gần nhất: 12:00 - 12:30
            </div>

            <div className="order-list w-100 d-flex flex-column gap-3">
                <div className="seller d-flex flex-column gap-3">
                    <div className="seller-name p-2 d-flex align-items-center">
                        <img src="/images/Avatar2.png" alt="" />
                        <div className="chef-name">
                            The Chef Town
                        </div>
                    </div>
                    <div className="order-items d-flex flex-column gap-3">
                        <div className="order-item px-3 d-flex gap-3">
                            <div className="item-info d-flex">
                                <img className="item-image" src="/images/Avatar3.png" alt="" />
                                <div className="d-flex flex-column">
                                    <div className="label">Mỳ Cá Cờ Sốt Yakitori</div>
                                    <div className="description">
                                        Ghi chú 1 - Lorem ipsum dolor sit amet Ghi chú 1 - Lorem ipsum dolor sit amet Lorem
                                        ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                                        dolor sit ametLorem ipsum dolor sit amet
                                    </div>
                                </div>
                            </div>
                            <div className="item-quantity d-flex justify-content-center gap-2">
                                <img src="/images/minus-circle.svg" alt="" />
                                <div className="quantity">1</div>
                                <img src="/images/plus-circle.svg" alt="" />
                            </div>

                            <div className="item-price d-flex flex-column align-items-end">
                                <div className="price-after font-weight-600">75,000</div>
                                <div className="price-before">90.000</div>
                            </div>
                        </div>

                        <div className="order-item px-3 d-flex gap-3">
                            <div className="item-info d-flex">
                                <img className="item-image" src="/images/Avatar3.png" alt="" />
                                <div className="d-flex flex-column">
                                    <div className="label">Mỳ Cá Cờ Sốt Yakitori</div>
                                    <div className="description">
                                        Ghi chú 1 - Lorem ipsum dolor sit amet Ghi chú 1 - Lorem ipsum dolor sit amet
                                    </div>
                                </div>
                            </div>
                            <div className="item-quantity d-flex justify-content-center gap-2">
                                <img src="/images/minus-circle.svg" alt="" />
                                <div className="quantity">1</div>
                                <img src="/images/plus-circle.svg" alt="" />
                            </div>

                            <div className="item-price d-flex flex-column align-items-end">
                                <div className="price-after font-weight-600">75,000</div>
                                <div className="price-before">90.000</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="total-amount-wrapper p-3 d-flex flex-column gap-4">
                    <div className="total-amount d-flex gap-4 align-items-center">
                        <div className="label-and-description d-flex flex-column gap-2">
                            <div className="label">Tổng</div>
                             <div className="description">Phí giao hàng sẽ hiển thị khi bạn xem chi tiết đơn hàng</div>
                        </div>

                        <div className="amount">160,000 đ </div>
                    </div>

                    <button type="button" className="double-check-button">
                        Xem lại đơn hàng
                    </button>
                </div>
            </div>
        </Modal>
	)
}

export default CartModel;