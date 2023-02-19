'use strict';
const port = 40510;
const ws = new WebSocket(`ws://localhost:${port}`);
const submitBtn = document.getElementById('submitBtn');

const resultHTML = document.getElementById('result');
const errHTML = document.getElementById('err');

//ws
ws.onopen = () => console.log('connected');

ws.onmessage = event => {
	// handle message from server here
	const data = JSON.parse(event.data);
}

ws.onclose = () => {
	console.log('disconnected');
}
});
