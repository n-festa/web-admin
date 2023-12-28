
const CartItem =() =>{
	return (
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
	)
}

export default CartItem;