# HTTP Get > Bool

Perform HTTP Get request, parse JSON response and fill Bool value.

## Available Contract
  
Contract: [0x0B587f767463Df9e678F55A4718f43eE5Fc571Bf](https://mumbai.polygonscan.com/address/0x0B587f767463Df9e678F55A4718f43eE5Fc571Bf)

JobID: 380dc2f353f0463eb2371a4635adefd7

## Price

0.01 LINK

## Parameters

The job requires the following parameters to be specified:

* `get` - internet-facing URL from where the data is retrieved
* `path` - comma-separated JSON path used to extract the value

Example:

```solidity
// ...
Chainlink.Request memory req = buildChainlinkRequest(
    stringToBytes32(jobId),
    address(this),
    this.fulfillValue.selector
);

req.add("get", "your_url");
req.add("path", "data,0,target");

return sendChainlinkRequest(req, ORACLE_PAYMENT);
//...
```
