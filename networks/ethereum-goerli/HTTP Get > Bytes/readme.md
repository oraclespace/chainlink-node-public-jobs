# OracleSpace HTTP Get > Bytes on Ethereum Goerli

Perform HTTP Get request, parse JSON response and fill bytes.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: 9af746c7cfbc415c9737b239df9a30ab

### Price

0.05 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/data-for-bytes.json
- `path` - data,project,name

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0xCE1cb3599bE219EfcE5F5b444F148e6651405D8c](https://goerli.etherscan.io/address/0xCE1cb3599bE219EfcE5F5b444F148e6651405D8c)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
