import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to="/" data-testid="main-link">
                Main
            </Link>
            <Link to="/about" data-testid="about-link">
                About
            </Link>
            <Link to="/users" data-testid="users-link">
                Users
            </Link>
        </>
    );
};

export default Navbar;
