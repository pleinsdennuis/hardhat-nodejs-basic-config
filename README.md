# hardhat-nodejs-basic-config
deploy a solidity smart contract with hardhat and interact with it in nodejs. 

#### install yarn (synthax depend of your distrib).
#### create a folder for the project and go into:
```
mkdir project_name
cd project_name
```
```
# init yarn project and install hardhat
yarn init
yarn add --dev hardhat
# 
yarn hardhat
```

Delete the Lock.sol contract, create a new file ContractExemple.sol, write your own smart contract

Go into scripts/deploys.sol and modify the file (code in the repo at scripts/deploy.ts)
```
# compile your contract:
yarn hardhat compile
```
```
# run the hardhat node:
yarn hardhat node
```
Open a new terminal window
```
# deploy the contract:
yarn hardhat run scripts/deploy.ts --network localhost
```
#### now the nodejs part
```
# Install nodemon, web3, ws and express
yarn add --dev nodemon
yarn add web3 ws express
```
write your nodejs script in server.mjs to interact with your smart contract and use his function

run the nodejs script :
```
npm run dev
```

good job !
