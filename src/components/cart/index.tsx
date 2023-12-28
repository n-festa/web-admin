import CartItem from './cart_item'
const Cart =() =>{
	return (
	    <div className="cart-info-wrapper d-flex flex-column align-items-center gap-2">
			<div className="title"> Giỏ đồ ăn </div>
			<div className="delivery-time">
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
			            <CartItem />

			            <CartItem />
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
		</div>
	)
}

export default Cart;