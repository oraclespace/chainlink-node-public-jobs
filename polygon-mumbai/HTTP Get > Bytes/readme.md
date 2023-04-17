# OracleSpace HTTP Get > Bytes on Polygon Mumbai

Perform HTTP Get request, parse JSON response and fill bytes.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)  
JobID: 9af746c7cfbc415c9737b239df9a30ab

### Price

0.025 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/data-for-bytes.json
- `path` - data,project,name

## Supported hosts for REST requests

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0xA30C896b1F4A261F8618251E0449d372b838715c](https://mumbai.polygonscan.com/address/0xA30C896b1F4A261F8618251E0449d372b838715c)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
