const promise = new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello, I am a Promise!');
	}, 2000);
});

promise.then(value => console.log(value));
