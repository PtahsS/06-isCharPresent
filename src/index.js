function isCharPresent(string, symbol) {
	if (symbol.length == 1) {
		for (i=0; i<string.length; i++) {
			if(string[i] == symbol) return true;
		}
		return false;
	} 
	throw new Error('Symbol has to be only one.')
	
	
}

console.log(isCharPresent('Hello Ukraine', 'u'));
console.log(isCharPresent('Hello Ukraine', 'e'));
// console.log(isCharPresent('Hello Ukraine', 'je'));

module.exports = { isCharPresent }