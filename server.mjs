// node js server script to interact with your smart contract
import Web3 from 'web3';
import artifacts from "./artifacts/contracts/Addition.sol/Addition.json" assert { type: "json"};

import { WebSocketServer } from 'ws';

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// you can hardcode the abi and the bytecode if you want
const abi = artifacts.abi;
const bytecode = artifacts.bytecode;
const contractAddress = /* contract address */ ;

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const contract = new web3.eth.Contract(abi, contractAddress);

const server = new WebSocketServer({ port: 40510 });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

server.on('connection', (ws, req) => {
	console.log('connected');
	ws.on('message', data => {
		const DATA = JSON.parse(data);
	});
	
	//use your smart contract's methods
});

app.listen(8080);
