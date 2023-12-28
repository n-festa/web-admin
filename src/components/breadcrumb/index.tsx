import Link from 'next/link';


const Breadcrumb =() =>{
	return (
		 
	    <section className="go-previous-section d-flex gap-2 container my-3">
	    	<Link href="#" className="go-previous">
			    <img src="/images/chevronleft.svg" alt="" />
			    <span >
			        Quay lại trang trước
			    </span>
		    </Link>
		</section>
	)
}

export default Breadcrumb;