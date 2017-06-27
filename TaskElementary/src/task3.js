'use strict';

function task3 (triangleList) {
	let out;

	try {
		preValidate3(triangleList);
		out = sortTriangles(triangleList);
	} catch (err) {
		out = {
			status: 'failed', 
			reason: err.message
		};
	}

	return out;
}

function sortTriangles (triangleList) {
	let newTriangleList = [],
		verticesList = [];

	newTriangleList = triangleList.map(triangle => {
		let a, b, c, p, s;

		a = triangle.a;
		b = triangle.b;
		c = triangle.c;
		p = (a + b + c) / 2;
		s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
		
		return {
			vertices: triangle.vertices, 
			area: s
		}
	});

	newTriangleList.sort((triangle1, triangle2) => triangle2.area - triangle1.area);
	newTriangleList.forEach(triangle => verticesList.push(triangle.vertices));

	return verticesList;
}

function preValidate3 (triangleList) {
	let inputIsValid = triangleList && triangleList.length && AreValidTriangles(triangleList);

	if (!inputIsValid) {
        throw new Error('Input is not valid');
    }
}

function AreValidTriangles (triangleList) {
	return triangleList.every(triangle => {
		let IsValid;

		IsValid = triangle.a && triangle.a > 0 &&
			triangle.b && triangle.b > 0 &&
			triangle.c && triangle.c > 0 &&
			triangle.vertices;

		return IsValid;
	});	
}