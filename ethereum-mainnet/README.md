# OracleSpace Chainlink Public Jobs on Ethereum Mainnet

## Attention! Public Jobs have some limits in this network

Please read the [appropriate section](#limits-on-this-network) on this page before using Job on this network!

## List of jobs

| Job                                                                  | Availability / Cost / Limits                                                                                                                                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HTTP Get > Bool](./HTTP%20Get%20%3E%20Bool)                         | ✅ / 1.36 LINK / 🟡 [Gas Price Limit](#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI, 🟡 [Gas Units Limit](#attention-public-jobs-have-some-limits-in-this-network) - 85_000 |
| [HTTP Get > Bytes](./HTTP%20Get%20%3E%20Bytes)                       | ✅ / 1.62 LINK / 🟡 [Gas Price Limit](#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI, 🟡 [Gas Units Limit](#attention-public-jobs-have-some-limits-in-this-network) - 90_000 |
| [HTTP Get > Bytes[]](./HTTP%20Get%20%3E%20Bytes%5B%5D)               | ✅ / 1.62 LINK / 🟡 [Gas Price Limit](#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI, 🟡 [Gas Units Limit](#attention-public-jobs-have-some-limits-in-this-network) - 90_000 |
| [HTTP Get > Uint256](./HTTP%20Get%20%3E%20Uint256)                   | ✅ / 1.35 LINK / 🟡 [Gas Price Limit](#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI, 🟡 [Gas Units Limit](#attention-public-jobs-have-some-limits-in-this-network) - 85_000 |
| [HTTP Get > Uint256,Uint256](./HTTP%20Get%20%3E%20Uint256%2CUint256) | ✅ / 1.36 LINK / 🟡 [Gas Price Limit](#attention-public-jobs-have-some-limits-in-this-network) - 100 GWEI, 🟡 [Gas Units Limit](#attention-public-jobs-have-some-limits-in-this-network) - 85_000 |
| HTTP Get > Uint256[]                                                 | ❌                                                                                                                                                                                                |
| AccuWeather Get Current Conditions by Location Coordinates           | [Provided on request](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)                                                                                                       |

### Can't find a Job?

We are ready to post your Job. [Contact us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)

## Limits on this network

Network commissions do not allow us to provide for the same fee in LINK for all types of Fulfillment Callback Function. To insure ourself from extreme fees during periods of Gas Storm, we use next limits for **public jobs**:

- **Gas Units Limit for Fulfill Callback Function Execution** specially configured for each Job. Please, read [Gas Units Limit for Fulfill Callback Function explanation section](#gas-units-limit-for-fulfill-callback-function-explanation) before using us Jobs.
- **Gas Price Limit** - The **default limit** is **100 GWEI**. **Usually** the Gas Price in this network is **30-70 GWEI**. Public Jobs will not be execute when the price of gas is more than the limit.

### Comparsion Table

|                                    | With Limits                                     | Without Limits |
| ---------------------------------- | ----------------------------------------------- | -------------- |
| **Payment**                        | Fixed and small                                 | Individually   |
| **Waiting For Deploy**             | No, Plug And Play                               | During the day |
| **Immediate execution**            | Not guaranteed when Gas Price > Gas Price Limit | Yes            |
| **Fulfill Callback Function Size** | Limited                                         | Unlimited      |

### What happens if my Job runs at a Current Gas Price greater than the Gas Price Limit?

#### In a nutshell

The client contract will pay the LINK immediately, but the Chainlink Node will write the result of the Job into the client contract only after the gas price has returned to the allowable price. Don't worry! If for some reason, your transaction will not be executed even after returning to the valid range, we will find out the reason and return the LINK you spent to execute it, if it is confirmed.

#### Detailed explanation

1. The node detects that the gas price is higher than ETH_MAX_GAS_PRICE_WEI. The node takes the value of ETH_MAX_GAS_PRICE_WEI and sets it as a static gas price and writes a log message like [WARN]. We receive an Alert to the Alert System.
2. Client calls Job from its ChainlinkClient contract. LINKs are deducted from the customer's contract and transferred to the Operator Contract in the specified amount.
3. When Job needs to send a transaction (ethtx task) to Operator Contract and call the client callback function, it will fail to do so because the price for gas billed by the node (see point 1) is insufficient to pay the gas. This transaction is postponed. The Chainlink Node remembers that we have an outstanding transaction and tries to execute it periodically (usually every 1-2 min), and writes a log about it at each failed iteration. In this case, usually no ETH is deducted from the Chainlink Node Address for trying to send the transaction.
4. If the transaction will not be executed in the next 3 blocks from the head, the gas price for the execution of the transaction is increased (paid by the Chainlink Node Address) and a log message is written. The price increase is necessary so that the transaction can be executed as quickly as possible.
5. As soon as the gas price returns to acceptable values, the Chainlink Node will execute all pending transactions at the next iteration of execution with a higher priority.

### I need Job without limits

We are ready to place your Job as soon as possible without the specified limits. To do this, please [contact us](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us) and we will discuss the details with you.

### If you still have questions how the limits work

You can find information in the [Gas Units Limit for Fulfill Callback Function](#gas-units-limit-for-fulfill-callback-function-explanation) or [contact us](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us) section

## Gas Units Limit for Fulfill Callback Function explanation

This is a mechanism that allows the Operator to insure itself against unexpected losses in networks with very high gas resistance. Next, we'll break down what it means:

- [What this means for you is this](#what-this-means-for-you-is-this)
- [Fulfill Callback Function](#fulfill-callback-function)
- [Gas Units Limit](#gas-units-limit)
- [Gas Units Limit for the Fulfill Callback Function](#gas-units-limit-for-fulfill-callback-function)
- [Check the Gas Units usage by your Fulfill Callback Function](#how-do-i-know-the-gas-units-usage-for-function-execution)

### What does it means for you

If your Fulfill Callback Function consumes more Gas Units than the Gas Units Limit policy specifies, the Job will not be executed. Fortunately, the number of Gas Units consumed by your function [can be calculated](#how-do-i-know-the-gas-units-usage-for-function-execution) to avoid surprises.

### Fulfill Callback Function

The function, the pointer to which is passed to **buildChainlinkFunction** and which will be called to pass the result of off-chain calculations to the Chainlink Node.

Example:

```solidity
contract GetBool is ChainlinkClient {
  using Chainlink for Chainlink.Request;

  uint256 public ORACLE_PAYMENT = 10000000000000000;

  string constant jobId = "JOB_ID_HERE";

  bool public value;

  constructor() {
      setChainlinkToken("CHAINLINK_TOKEN_ADDRESS");
      setChainlinkOracle("YOUR_OPERATOR_CONTRACT_ADDRESS");
  }

  function yourFulfillFunction(
      bytes32 _requestId,
      bool _value
  ) public recordChainlinkFulfillment(_requestId) {
      emit RequestValue(_requestId, _value);
      value = _value;
  }

  function requestValue(
      string memory _url,
      string memory _path
  ) public returns (bytes32 requestId) {
      Chainlink.Request memory req = buildChainlinkRequest(
          stringToBytes32(jobId),
          address(this),
          this.yourFulfillFunction.selector
      );
      req.add("get", _url);
      req.add("path", _path);
      return sendChainlinkRequest(req, ORACLE_PAYMENT);
  }
}
```

In example below, **yourFulfillFunction** is **Fulfill Callback Function**, because we pass a pointer to it to **buildChainlinkRequest** as **this.yourFulfillFunction.selector**

### Gas Units Limit

When executed on an EVM, each operation in your smart contract consumes Gas Units ([more in Ethereum documentation](https://ethereum.org/en/developers/docs/gas/) or [a more detailed technical description of the calculation](https://growingdata.com.au/how-to-calculate-gas-fees-on-ethereum/)).
Each function requires some number of Gas Units to execute successfully.  
**Gas Units Limit** - the number of Gas Units used by a function for execution, above which the function will not be executed

### Gas Units Limit for Fulfill Callback Function

Thus, **Gas Units Limit for Fulfill Callback Function** - the number of **Gas Units** used by your **Fulfill Callback Function** for execution, above which the function will not be executed

### How do I know the Gas Units usage for Function Execution?

#### Remix IDE method

Warning: Use in Testnet/Localnet networks to avoid losing money!

1. Make sure you can interact with the contract in the "Deployed Contracts" section
2. Call your Fulfill Callback Function through the Remix IDE interface with test arguments.
3. After executing the function, you should see the transaction information in the Remix IDE console.
4. Expand the transaction details by clicking on the "down arrow" next to the "debug" button
5. Locate the "gas" field. It contains the number of Gas Units required for your function to execute

If for some reason you can't find the "gas" field, but you have "transaction hash", you can search for the transaction on Ether/Polygon scan by "transaction hash" and then [find data on Polygon/Etherscan using "transaction hash"](#etherpolygon-scan-method)

#### Ether/Polygon scan method

If you already have a "transaction hash" from running the Fulfill Callback Function, you can find the usage data for Gas Units on the Ether/Polygon scan.

Ether/Polygon scan addresses:

- [Etherscan Mainnet](https://etherscan.io/)
- [Etherscan Goerli](https://goerli.etherscan.io/)
- [Polygonscan Mainnet](https://polygonscan.com/)
- [Polygonscan Mumbai](https://mumbai.polygonscan.com/)

1. Go to Ether/Polygon scan depending on the network on which the function was performed
2. Search for the transaction by "transaction hash". If the transaction exists, you will see a page with the transaction details
   Click on the "Click to see more" button.
3. Find the "Gas Limit & Usage by Txn" field. The **first value in it is the Gas Units Limit to run**, the **second value is the number of Gas Units used by execution your Fulfill Callback Function**. You are interested in the **second value**
