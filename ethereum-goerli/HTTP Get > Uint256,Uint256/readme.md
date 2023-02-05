# HTTP Get > Uint256,Uint256

Perform HTTP Get request, parse JSON response and fill double uint256.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)
JobID: 50ce6528f1db4b7d888caa3fac23b783

### Price

0.05 LINK

### Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `path1` - path to first value
* `path2` - path to second value
* `multiply` - int256

### Test Parameters

* `get` - https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
* `path1` - RAW,ETH,USD,HIGHDAY
* `path2` - RAW,ETH,USD,LOWDAY
* `multiply` - 100

## Our Client Example Contract
  
Client Example Contract: [0xCa5B145d81AaE38da9714f90316bF1D8E17fa24B](https://goerli.etherscan.io/address/0xCa5B145d81AaE38da9714f90316bF1D8E17fa24B)
