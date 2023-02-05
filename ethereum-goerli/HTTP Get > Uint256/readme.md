# HTTP Get > Uint256

Perform HTTP Get request, parse JSON response and fill uint256.

## Available Contract
  
Contract: [0x589C4637135B02C8F8e261C1C2b7D4619B0fB885](https://goerli.etherscan.io/address/0x589C4637135B02C8F8e261C1C2b7D4619B0fB885)

JobID: beb323d08e56408a8c85271b2db4f196

## Price

0.025 LINK

## Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `multiply` - int256
* `path` - comma-separated JSON path used to extract the value

## Test request

* `get` - https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
* `multiply` - 100
* `path` - RAW,ETH,USD,PRICE
