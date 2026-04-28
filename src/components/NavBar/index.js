import { Link } from 'react-router-dom';
import './NavBar.scss';
export default function Navbar() {
    return (
        <>
            <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
            <ul className="header-menu">
                <li className="header-item"> <Link to="/">Home</Link></li>
                <li className="header-item"> <Link to="/shop">Shop</Link></li>
                <li className="header-item"> <Link to="/blogs">Blogs</Link></li>
                <li className="header-item"> <Link to="/pages">Pages</Link></li>
                <li className="header-item"> <Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
        </>


    );
}
