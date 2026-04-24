import { FaSearch } from "react-icons/fa";
import './Header.scss';
import Navbar from "../NavBar";

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-wrap">
                    <a href="/"><div className="header-logo">KAIRA</div></a>
                    <Navbar />
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