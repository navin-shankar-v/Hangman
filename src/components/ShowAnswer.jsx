import { useEffect, useState } from 'react'

import { isAlpha, ord } from '../assets/helper'

import './ShowAnswer.css'

function ShowAnswer({answer, guesses}){
	const [display, setDisplay] = useState();	


	useEffect(() =>{
		var display_answer = []
		console.log(answer)
		for(var i = 0; i < answer.length; i++){
			var class_name = "green";
			if(isAlpha(answer[i]) && guesses[ord(answer[i])] == 0) class_name = "red";
			class_name += " ans";
			display_answer.push(<pre className={class_name} key={i} >{answer[i]}</pre>)
		}
		setDisplay(display_answer);
	}, [answer, guesses]);	

	return (
		<div className="row">
			{display}
		</div>
	)
}

export default ShowAnswer
