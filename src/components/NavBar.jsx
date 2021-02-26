import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

	return (
		<nav>
			<NavLink className="logo" to="/">
				Brand Logo
			</NavLink>
			<div className="nav-links">
				<NavLink activeClassName="selected-page" className="link" to="/about">
					About
				</NavLink>
				<NavLink activeClassName="selected-page" className="link" to="/contact">
					Contact
				</NavLink>
				<NavLink activeClassName="selected-page" className="link" to="/blog">
					Blog
				</NavLink>
				<NavLink activeClassName="selected-page" className="link" to="/admin">
					Admin
				</NavLink>
				<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
					{isLoggedIn ? 'logout' : 'login'}
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
