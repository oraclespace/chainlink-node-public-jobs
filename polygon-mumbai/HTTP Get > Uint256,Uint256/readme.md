# HTTP Get > Uint256,Uint256

Perform HTTP Get request, parse JSON response and fill double uint256.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)
JobID: 50ce6528f1db4b7d888caa3fac23b783

### Price

0.035 LINK

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
  
Client Example Contract: [0x1e2d5788DbdA58F58907A3ee8f7812a3A197b1Fa](https://mumbai.polygonscan.com/address/0x1e2d5788DbdA58F58907A3ee8f7812a3A197b1Fa)
