import { FaSearch } from "react-icons/fa";
function Header() {
    return (
        <>
            <header className="header">
                <div className="header-wrap">
                    <a href="/"><div className="header-logo">KAIRA</div></a>
                    <ul className="header-menu">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    <div className="header-right">
                        <div className="header-wishlist"><a href="#">WHISTLIST</a></div>
                        <div className="header-cart"><a href="#">CART</a></div>
                        <FaSearch className="searchIcon" />

                    </div>

                </div>
            </header>
        </>
    )
}
export default Header;