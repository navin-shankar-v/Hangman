import { useState } from 'react';

function GameResult({ result }) {
	return (
	<div>
		<h1>{result == 0 ? "" : (result == "1" ? "You won" : "You lost")}</h1>
	</div>
	) 
}


export default GameResult
