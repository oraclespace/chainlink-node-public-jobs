# HTTP Get > Uint256

Perform HTTP Get request, parse JSON response and fill uint256.

## Available Contract
  
Contract: [0xEE7808F1c05080cCA309f04867Ad04F1550a69bC](https://mumbai.polygonscan.com/address/0xEE7808F1c05080cCA309f04867Ad04F1550a69bC)

JobID: 9af746c7cfbc415c9737b239df9a30ab

## Price

0.02 LINK

## Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `multiply` - int256
* `path` - comma-separated JSON path used to extract the value

## Test request

* `get` - https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
* `multiply` - 100
* `path` - RAW,ETH,USD,PRICE
