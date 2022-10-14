import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </nav>
      </div>
    );
};

export default Navbar;
