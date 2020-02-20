// You should implement your task here.
'use strict';
module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length === 0) return [];
	let arr = [];
	matrix.forEach((element, idx) => {
		if (idx % 2 != 0) {
			element.reverse();
		}
		element.forEach((val) => arr.push(val));
	});
	return arr;
};
