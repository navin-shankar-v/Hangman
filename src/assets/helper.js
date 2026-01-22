function ord(ch) {
	return ch.charCodeAt(0) - 65;
}

function isAlpha(ch) {
	if(ord(ch) <= 25 && ord(ch) >= 0) return true;
	return false;
}

function chooseNewWord(arr) {
	return arr[Math.floor(Math.random() * arr.length)].toUpperCase();
}

function setPresence(word) {
	var new_present = Array.from({length: 26}, (_, i) => 0);

	for(var i = 0; i < word.length; i++){
		if(isAlpha(word[i])){
			new_present[ord(word[i])] = 1;
		}
	}

	return new_present;
}


function updateClueBlanks(answer, guesses) {
	var res = "", cnt = 0;

	for(let i = 0;i < answer.length;i++){
		if(isAlpha(answer[i])){
			var ord1 = ord(answer[i]);
			if(guesses[ord1] === 1) { 
				res += answer[i];
			}
			else {
				res += "_"; cnt += 1;
			}
		}else{
			res += answer[i];
		}
		res += " ";
	}

	return {res: res, cnt: cnt};
} 


export { ord, isAlpha, chooseNewWord, setPresence, updateClueBlanks };
