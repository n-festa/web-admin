import Link from 'next/link'

const Breadcrumb = () =>{
	return(
        <nav aria-label="breadcrumb">
         	<ol className="breadcrumb mb-0 align-items-center">
	         	<li className="breadcrumb-item">
	         		<Link className="text-decoration-none" href="/">Home</Link>
	         	</li>
	         	<li className="breadcrumb-item">
	         		<Link className="text-decoration-none" href="/">Library</Link>
	         	</li>
	         	<li className="breadcrumb-item active" aria-current="page">Data</li>
	         </ol>
        </nav>
	)
}

export default Breadcrumb