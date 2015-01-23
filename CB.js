function Chess(size) {
	var Board = "";

	for (var x = 0; i < size; i++){
		for (var i = 0; i < size; i++) {
			if ((i + x)% 2 = 0) {
				Board += " ";
			}
			else {
				Board += "#";
			}
			
		}
		board += "\n";
	}
}
console.log(Chess(8));
