# OracleSpace HTTP Get > Bytes on Arbitrum Mainnet

Perform HTTP Get request, parse JSON response and fill bytes.

## Use in Your Contract

- Operator Contract: [0x6861123fcE41d159c7E5f7A229160d8241A1BF5b](https://arbiscan.io/address/0x6861123fcE41d159c7E5f7A229160d8241A1BF5b)
- JobID: 9af746c7cfbc415c9737b239df9a30ab

### Price

0.15 LINK

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

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
