//your JS code here. If required.
const output = document.querySelector('#output');

let promise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("Hello, world");
	}, 500)
});

setTimeout(()=>{
	promise.then(()=>{
		output.textContent = "Hello, world!";
	})
}, 500)
