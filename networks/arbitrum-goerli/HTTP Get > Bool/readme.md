# OracleSpace HTTP Get > Bool on Arbitrum Goerli

Perform HTTP Get request, parse JSON response and fill Bool.

## Use in Your Contract

Operator Contract: [0xB7a5181B507B3c7A70Bb633E118cd0f3d919143a](https://goerli.arbiscan.io/address/0xB7a5181B507B3c7A70Bb633E118cd0f3d919143a)  
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

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
