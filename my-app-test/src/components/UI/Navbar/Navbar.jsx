import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar__links">
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/posts">Posts</Link>
            </nav>
      </div>
    );
};

export default Navbar;
