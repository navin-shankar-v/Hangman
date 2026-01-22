import { useState, useEffect } from 'react'
import img0 from "/stages/0.png"
import img1 from "/stages/1.png"
import img2 from "/stages/2.png"
import img3 from "/stages/3.png"
import img4 from "/stages/4.png"
import img5 from "/stages/5.png"
import img6 from "/stages/6.png"
import img7 from "/stages/7.png"

function StagePicture({ mistakes, result }) {

	useEffect(() => {
		switch (mistakes){
			case 1:
				document.getElementById("stage-image").src = img1;
				break;
			case 2:
				document.getElementById("stage-image").src = img2;
				break;
			case 3:
				document.getElementById("stage-image").src = img3;
				break;
			case 4:
				document.getElementById("stage-image").src = img4;
				break;
			case 5:
				document.getElementById("stage-image").src = img5;
				break;
			case 6:
				document.getElementById("stage-image").src = img6;
				break;
			case 7:
				document.getElementById("stage-image").src = img7;
				break;
			default:
				document.getElementById("stage-image").src = img0;
				break;
		}
	}, [mistakes]);

	return (<div>
		<h2> Mistakes made: {mistakes}</h2>
		<img id="stage-image" />	
	</div>
	)
	return null
}

export default StagePicture;
