let j = 0;
let k = 1;
for(let i=0; i<10; i++) {
	console.log(j);
	let t = j;
	j = k;
	k = t + k;
}

console.log('Current root:', process.cwd());
