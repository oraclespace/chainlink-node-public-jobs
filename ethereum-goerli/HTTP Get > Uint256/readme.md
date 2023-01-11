# HTTP Get > Bool

Perform HTTP Get request, parse JSON response and fill uint256.

## Available Contract
  
Contract: [0x56e5424b6C857B625C932839a4E1CE1D3EC45957](https://goerli.etherscan.io/address/0x56e5424b6C857B625C932839a4E1CE1D3EC45957)

JobID: 9af746c7cfbc415c9737b239df9a30ab

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
