// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * @notice DO NOT USE THIS CODE IN PRODUCTION. This is an example contract. Code not audited and Calling functions can have excessive gas consumption.
 */
contract GetBool is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public ORACLE_PAYMENT;

    string public jobId;

    bool public value;

    event RequestValue(bytes32 indexed requestId, bool indexed value);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x514910771AF9Ca656af840dff83E8264EcF986CA);
        setChainlinkOracle(0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a);
        setJobId("380dc2f353f0463eb2371a4635adefd7");
        setOraclePayment(((1 * LINK_DIVISIBILITY) / 100) * 136);
    }

    function requestValue(
        string memory _url,
        string memory _path
    ) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfillValue.selector
        );
        req.add("get", _url);
        req.add("path", _path);
        return sendChainlinkRequest(req, ORACLE_PAYMENT);
    }

    function fulfillValue(
        bytes32 _requestId,
        bool _value
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestValue(_requestId, _value);
        value = _value;
    }

    function stringToBytes32(
        string memory source
    ) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
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

    function setJobId(string memory _jobId) public onlyOwner {
        jobId = _jobId;
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
