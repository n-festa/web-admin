
const AddToCart =() =>{
	return (
	    <section className="add-to-cart-bar-section d-flex justify-content-center mt-5 gap-4">
		    <div className="add-to-cart d-flex align-items-center gap-4">
		        <img src="/images/minus-circle.svg" />
		        <span>1</span>
		        <img src="/images/plus-circle.svg" />
		    </div>
		    <button className="add-to-cart-button2">
		        Thêm vào giỏ hàng - 80,000 VND
		    </button>
		</section>
	)
}

export default AddToCart;