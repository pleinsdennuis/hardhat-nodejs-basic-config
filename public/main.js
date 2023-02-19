'use strict';
const port = 40510;
const ws = new WebSocket(`ws://localhost:${port}`);

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
