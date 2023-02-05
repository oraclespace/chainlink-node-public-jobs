# HTTP Get > Bytes[]

Perform HTTP Get request, parse JSON response and fill array of bytes.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)  
JobID: b4ad328b211f46bfa04ab4e14023e61d

### Price

0.05 LINK

### Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `path` - comma-separated JSON path used to extract the value

### Test Parameters

* `get` - https://raw.githubusercontent.com/oraclelabs-link/chainlink-node-public-jobs/master/example-data/array-of-strings.json
* `path` - data,names

## Our Client Example Contract
  
Client Example Contract: [0x0532bA07c1B5F93FCb566A6aF913Ae674315340c](https://mumbai.polygonscan.com/address/0x0532bA07c1B5F93FCb566A6aF913Ae674315340c)
