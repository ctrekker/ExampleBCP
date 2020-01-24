let j = 0;
let k = 1;
for(let i=0; i<10; i++) {
	console.log(j+k);
	let t = k;
	j = k;
	k = t;
}

