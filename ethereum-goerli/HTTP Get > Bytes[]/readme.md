# OracleSpace HTTP Get > Bytes[] on Ethereum Goerli

Perform HTTP Get request, parse JSON response and fill array of bytes.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: b4ad328b211f46bfa04ab4e14023e61d

### Price

0.1 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/array-of-strings.json
- `path` - data,names

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0xC4b3a3B8296d1881b36E3107d45e0447E1F33f15](https://goerli.etherscan.io/address/0xC4b3a3B8296d1881b36E3107d45e0447E1F33f15)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
