# OracleSpace HTTP Get > Bool on Ethereum Goerli

Perform HTTP Get request, parse JSON response and fill Bool.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: 380dc2f353f0463eb2371a4635adefd7

### Price

0.01 LINK

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

## Our Client Example Contract

Client Example Contract: [0xf74DB97e2BF116Bb79e85A82bcb3D81b4E2db8eC](https://goerli.etherscan.io/address/0xf74DB97e2BF116Bb79e85A82bcb3D81b4E2db8eC)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
