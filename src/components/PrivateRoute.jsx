import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return isLoggedIn ? children : <Redirect to="/" />;
				}}
			/>
		</div>
	);
};

export default PrivateRoute;
