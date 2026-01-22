import { useState, useEffect } from 'react'

import { isAlpha, ord, updateClueBlanks } from '../assets/helper'

function ClueBlanks({ answer, guesses, setResult }) {
	
	const [clueString, setClueString] = useState("");

	useEffect(() => {
		var response = updateClueBlanks(answer, guesses);
		if(response.cnt == 0) setResult(1);
		
		setClueString(response.res);
	}, [answer, guesses]);

	return (
		<div>
			<h2><pre>{clueString}</pre></h2>
		</div>
	)
}

export default ClueBlanks;
