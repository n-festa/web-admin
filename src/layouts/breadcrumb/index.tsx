

const Breadcrumb = () =>{
	return(
        <nav aria-label="breadcrumb">
         	<ol className="breadcrumb mb-0 align-items-center">
	         	<li className="breadcrumb-item">
	         		<a className="text-decoration-none" href="/">Home</a>
	         	</li>
	         	<li className="breadcrumb-item">
	         		<a className="text-decoration-none" href="/">Library</a>
	         	</li>
	         	<li className="breadcrumb-item active" aria-current="page">Data</li>
	         </ol>
        </nav>
	)
}

export default Breadcrumb