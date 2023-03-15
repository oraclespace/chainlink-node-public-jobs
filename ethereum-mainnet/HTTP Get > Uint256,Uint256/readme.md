# OracleSpace HTTP Get > Uint256,Uint256 | 85_000 Max Gas Units Limit | 100 GWEI Max Gas Price Limit

## Warning! This Job have some Limits

- ⚠️ [Gas Units Limit](../README.md#attention-public-jobs-have-some-limits-in-this-network) - 85_000
- ⚠️ [Gas Price Limit](../README.md#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI

Please, read [Ethereum Mainnet Public Jobs Limits section]("../../../README.md#attention-public-jobs-have-some-limits-in-this-network") before using this Job.

### I need Job without limits

We are ready to place your Job as soon as possible without the specified limits. To do this, please [contact us](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us) and we will discuss the details with you.

## Description

Perform HTTP Get request, parse JSON response and fill double uint256.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: 50ce6528f1db4b7d888caa3fac23b783

### Price

1.36 LINK

### Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `path1` - path to first value
* `path2` - path to second value
* `multiply` - int256

### Test Parameters

* `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
* `path1` - data,prices,LINK
* `path2` - data,prices,ETH
* `multiply` - 100

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
