import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<Link to="/game">Let's play a game</Link>
		</div>
	);
};

export default Home;
