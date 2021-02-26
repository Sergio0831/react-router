import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Admin from './components/Admin';
import PrivateRoute from './components/PrivateRoute';
import PrivateRoute2 from './components/PrivateRoute2';
import GamePage from './components/GamePage';
import WinnerPage from './components/WinnerPage';

const App = () => {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/blog" component={Blog} />
					<Route path="/game" component={GamePage} />
					<Route path="/winner" component={WinnerPage} />
					<PrivateRoute2 path="/admin" component={Admin} />
				</Switch>
			</BrowserRouter>
		</AuthContextProvider>
	);
};

export default App;
