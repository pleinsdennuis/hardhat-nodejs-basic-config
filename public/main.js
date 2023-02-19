'use strict';
const port = 40510;
const ws = new WebSocket(`ws://localhost:${port}`);
const submitBtn = document.getElementById('submitBtn');

const resultHTML = document.getElementById('result');
const errHTML = document.getElementById('err');

//ws
ws.onopen = () => console.log('connected');

ws.onmessage = event => {
	const data = JSON.parse(event.data);
}

ws.onclose = () => console.log('disconnected');

submitBtn.addEventListener('click', e => {
	if (ws.readyState === WebSocket.OPEN) {
		ws.send(JSON.stringify({data:'1'}))
	}
});