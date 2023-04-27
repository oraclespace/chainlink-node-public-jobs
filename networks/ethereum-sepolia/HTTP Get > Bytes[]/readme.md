# OracleSpace HTTP Get > Bytes[] on Ethereum Sepolia

Perform HTTP Get request, parse JSON response and fill array of bytes.

## Use in Your Contract

Operator Contract: [0x0F9c6BCdE15dfFFD95Cfa8F9167b19B433af1abE](https://sepolia.etherscan.io/address/0x0F9c6BCdE15dfFFD95Cfa8F9167b19B433af1abE)  
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

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
