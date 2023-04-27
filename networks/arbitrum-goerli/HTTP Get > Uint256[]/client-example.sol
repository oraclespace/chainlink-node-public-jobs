//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * @notice DO NOT USE THIS CODE IN PRODUCTION. This is an example contract. Code not audited and Calling functions can have excessive gas consumption.
 */
contract GetUint256Array is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256[] public arrayOfNumbers;

    uint256 public ORACLE_PAYMENT;

    string constant jobId = "3fdf0c58b21f4b539588015ad5ab62a8";

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28);
        setChainlinkOracle(0xB7a5181B507B3c7A70Bb633E118cd0f3d919143a);
        setOraclePayment(((1 * LINK_DIVISIBILITY) / 1000) * 75);
    }

    /**
     *
     */
    function requestBytes(
        string memory _url,
        string memory _path
    ) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfillArray.selector
        );
        req.add("get", _url);
        req.add("path", _path);
        sendOperatorRequest(req, ORACLE_PAYMENT);
    }

    event RequestFulfilled(bytes32 indexed requestId, uint256[] indexed data);

    function fulfillArray(
        bytes32 requestId,
        uint256[] memory _arrayOfNumbers
    ) public recordChainlinkFulfillment(requestId) {
        emit RequestFulfilled(requestId, _arrayOfNumbers);
        arrayOfNumbers = _arrayOfNumbers;
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
