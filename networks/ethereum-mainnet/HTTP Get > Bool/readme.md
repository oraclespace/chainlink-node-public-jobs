# OracleSpace HTTP Get > Bool | 85_000 Max Gas Units Limit | 100 GWEI Max Gas Price Limit on Ethereum Mainnet

## Warning! This Job have some Limits

- ⚠️ [Gas Units Limit](../README.md#attention-public-jobs-have-some-limits-in-this-network) - 85_000
- ⚠️ [Gas Price Limit](../README.md#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI

Please, read [Ethereum Mainnet Public Jobs Limits section]("../../../README.md#attention-public-jobs-have-some-limits-in-this-network") before using this Job.

### I need Job without limits

We are ready to place your Job as soon as possible without the specified limits. To do this, please [contact us](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us) and we will discuss the details with you.

## Description

Perform HTTP Get request, parse JSON response and fill Bool.

## Use in Your Contract

- Operator Contract: [0xa928d4b087AD35C46BA83331d8eEddb83152319b](https://etherscan.io/address/0xa928d4b087AD35C46BA83331d8eEddb83152319b)
- JobID: 380dc2f353f0463eb2371a4635adefd7

### Price

1.36 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/bool-values.json
- `path` - data,trueValue

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
