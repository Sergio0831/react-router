import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const GamePage = () => {
	const [guess, setGuess] = useState('');
	const history = useHistory();

	const handleGuess = () => {
		if (guess === 'car') {
			history.push('/winner');
		}
	};

	return (
		<div className="container">
			<h1>GamePage</h1>
			<input
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
				type="text"
			/>
			<button onClick={handleGuess}>Guess</button>
		</div>
	);
};

export default GamePage;
