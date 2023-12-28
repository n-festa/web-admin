import Link from 'next/link';

const Search =() =>{
    
    return(
        <div  className="search-input-wrapper d-flex">
            <div className="dropdown">
                <span className="">Giao đến</span>
                <img className="" alt=""  src="/images/markerpin03.svg"  />
            </div>
            <input type="text" className="search-input flex-grow-1" placeholder="22 Nguyễn Đình Thi, phường Phước Long B, thành phố Thủ
                                   Đức, thành phố Hồ Chí Minh"/>
        </div>
    );
}

export default Search;

