# AccuWeather Get Current Conditions by Coordinates Free 1

## CAUTION

Here is a free version of the AccuWeather API. For this reason, there are restrictions on the number of free requests. If you encounter incorrect operation of your smart contract, our EA may have run out of limits for this day. [Contact us](#have-some-questions-or-problems) if you encounter this problem.

If you need to deplay your AccuWeather API key - [contact us](#have-some-questions-or-problems).

## Description

Retrieve Accuweather API data by location coordinates.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: eb894ae815a14257b6682ddff0913e1b

### Price

0.25 LINK

### Parameters

The job requires the following parameters to be specified:

- `lat` - The latitude of the location, using the WGS84 standard. Select between -90 and 90 (both included).
- `lon` - The longitude of the location, using the WGS84 standard. Select between -180 and 180.
- `units` - The measurement system of the current weather conditions (metric or imperial).

### Test parameters

Location: Finland. Lappeenranta

- `lat` - "61.04751679644305"
- `lon` - "28.196344402734347"
- `units` - "metric"

### Check the requested data as in the example contract

After processing, the data received from the API is stored in the **requestIdCurrentConditionsResult** field. To access the specific data requested, you will need **requestId**. For example, if you make a request through the Remix IDE, you will find the **requestId** after calling the **requestLocationCurrentConditions** function. Look in the Output Console, logs section, there should be the following:

```json
[
  {
    "from": "0x8d1Ec86541A15cB362b651CCCaB5ceb2Dc2a0280",
    "topic": "0xb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af9",
    "event": "ChainlinkRequested",
    "args": {
      "0": "YOUR_REQUEST_ID",
      "id": "YOUR_REQUEST_ID"
    }
  }
]
```

You can then retrieve the key data with the received **requestId** by calling **requestIdCurrentConditionsResult**

### Parsing received data

Note that the units returned from the API need to be converted into proper floating point numbers. Here is an excerpt from the [LinkPool page for this Job](https://market.link/nodes/2e24e9d0-48dc-4e6e-9e29-b153b5a42d57/integrations) (be warned, at least Goerli Testnet Jobs don't work)

#### Output Condition Decimal Conversions and Units Table

| Condition                | Conversion        | Metric | Imperial |
| ------------------------ | ----------------- | ------ | -------- |
| precipitationPast12Hours | multiplied by 100 | mm     | in       |
| precipitationPast24Hours | multiplied by 100 | mm     | in       |
| precipitationPastHour    | multiplied by 100 | mm     | in       |
| pressure                 | multiplied by 100 | mb     | inHg     |
| temperature              | multiplied by 10  | C      | F        |
| windSpeed                | multiplied by 10  | km/h   | mi/h     |

## More information about Job

If you still have questions about this Job:

- [View LinkPool's official Job page](https://market.link/nodes/2e24e9d0-48dc-4e6e-9e29-b153b5a42d57/integrations) (be warned, at least Goerli Testnet Jobs don't work)
- [Contact us](#have-some-questions-or-problems)

## Our Client Example Contract

Client Example Contract: [0x8d1Ec86541A15cB362b651CCCaB5ceb2Dc2a0280](https://goerli.etherscan.io/address/0x8d1Ec86541A15cB362b651CCCaB5ceb2Dc2a0280)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclelabs-link/chainlink-node-public-jobs#contact-us)
