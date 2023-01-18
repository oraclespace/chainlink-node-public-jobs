//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * @notice DO NOT USE THIS CODE IN PRODUCTION. This is an example contract. Code not audited and Calling functions can have excessive gas consumption.
 */
contract GetBytesArray is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes[] public arrayOfBytes;

    uint256 public ORACLE_PAYMENT;

    bytes32 constant jobId = "b4ad328b211f46bfa04ab4e14023e61d";

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x7ca7215c6B8013f249A195cc107F97c4e623e5F5);
        setOraclePayment(((1 * LINK_DIVISIBILITY) / 100) * 5);
    }

    /**
     * @notice Request variable bytes[] from the oracle
     */
    function requestBytes(
        string memory _url,
        string memory _path
    ) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillBytesArray.selector
        );
        req.add("get", _url);
        req.add("path", _path);
        sendOperatorRequest(req, ORACLE_PAYMENT);
    }

    event RequestFulfilled(bytes32 indexed requestId, bytes[] indexed data);

    function fulfillBytesArray(
        bytes32 requestId,
        bytes[] memory _arrayOfBytes
    ) public recordChainlinkFulfillment(requestId) {
        emit RequestFulfilled(requestId, _arrayOfBytes);
        arrayOfBytes = _arrayOfBytes;
    }

    function getOracleAddress() external view returns (address) {
        return chainlinkOracleAddress();
    }

    function setOracle(address _oracle) external onlyOwner {
        setChainlinkOracle(_oracle);
    }

    function setOraclePayment(uint256 _payment) public onlyOwner {
        ORACLE_PAYMENT = _payment;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface linkToken = LinkTokenInterface(
            chainlinkTokenAddress()
        );
        require(
            linkToken.transfer(msg.sender, linkToken.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
