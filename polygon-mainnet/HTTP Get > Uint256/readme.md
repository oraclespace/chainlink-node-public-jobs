# OracleSpace HTTP Get > Uint256 on Polygon Mainnet

Perform HTTP Get request, parse JSON response and fill uint256.

## ERC-677 LINK on Polygon information

Important information for the LINK cross-chain transfer!  
[Official Chainlink documentation](https://docs.chain.link/resources/link-token-contracts/#polygon-mainnet) says:

> The LINK provided by the [Polygon (Matic) Bridge](https://wallet.polygon.technology/polygon/bridge/) is not ERC-677 compatible, so you cannot use it with Chainlink services or oracle nodes. Use the [Chainlink PegSwap service](https://pegswap.chain.link/) to convert bridged LINK to the official ERC-677 LINK token on Polygon.
>
> Watch the [Moving Chainlink Cross-Chains video](https://www.youtube.com/watch?v=WKvIGkBWRUA) to learn more.

If you have further questions about this, please [contact us](#have-some-questions-or-problems)

## Use in Your Contract

Operator Contract: [0xa928d4b087AD35C46BA83331d8eEddb83152319b](https://polygonscan.com/address/0xa928d4b087AD35C46BA83331d8eEddb83152319b)  
JobID: beb323d08e56408a8c85271b2db4f196

### Price

0.1 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `multiply` - int256
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
- `multiply` - 100
- `path` - data,prices,LINK

## Supported hosts for REST requests

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
