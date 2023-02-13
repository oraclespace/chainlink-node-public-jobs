// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * @title A consumer contract for AccuWeather EA 'location-current-conditions' endpoint.
 * @author LinkPool.
 * @notice Request the current weather conditions for the given location coordinates (i.e. latitude and longitude).
 * @dev Uses @chainlink/contracts 0.4.0.
 */
contract AccuweatherLocationCurrentConditionsConsumer is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    /* ========== CONSUMER STATE VARIABLES ========== */
    struct RequestParams {
        uint256 locationKey;
        string endpoint;
        string lat;
        string lon;
        string units;
    }
    struct LocationResult {
        uint256 locationKey;
        string name;
        bytes2 countryCode;
    }
    struct CurrentConditionsResult {
        uint256 timestamp;
        uint24 precipitationPast12Hours;
        uint24 precipitationPast24Hours;
        uint24 precipitationPastHour;
        uint24 pressure;
        int16 temperature;
        uint16 windDirectionDegrees;
        uint16 windSpeed;
        uint8 precipitationType;
        uint8 relativeHumidity;
        uint8 uvIndex;
        uint8 weatherIcon;
    }
    // Maps
    mapping(bytes32 => CurrentConditionsResult)
        public requestIdCurrentConditionsResult;
    mapping(bytes32 => LocationResult) public requestIdLocationResult;
    mapping(bytes32 => RequestParams) public requestIdRequestParams;

    string constant jobId = "eb894ae815a14257b6682ddff0913e1b";

    uint256 public ORACLE_PAYMENT;

    /* ========== CONSTRUCTOR ========== */
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a);
        setOraclePayment(((1 * LINK_DIVISIBILITY) / 100) * 25);
    }

    /* ========== CONSUMER REQUEST FUNCTIONS ========== */

    /**
     * @notice Returns the current weather conditions of a location for the given coordinates.
     * @param _lat the latitude (WGS84 standard, from -90 to 90).
     * @param _lon the longitude (WGS84 standard, from -180 to 180).
     * @param _units the measurement system ("metric" or "imperial").
     */
    function requestLocationCurrentConditions(
        string calldata _lat,
        string calldata _lon,
        string calldata _units
    ) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfillLocationCurrentConditions.selector
        );
        req.add("lat", _lat);
        req.add("lon", _lon);
        req.add("units", _units);
        bytes32 requestId = sendChainlinkRequest(req, ORACLE_PAYMENT);
        // Below this line is just an example of usage
        storeRequestParams(
            requestId,
            0,
            "location-current-conditions",
            _lat,
            _lon,
            _units
        );
    }

    /* ========== CONSUMER FULFILL FUNCTIONS ========== */
    /**
     * @notice Consumes the data returned by the node job on a particular request.
     * @dev Only when `_locationFound` is true, both `_locationFound` and `_currentConditionsResult` will contain
     * meaningful data (as bytes). This function body is just an example of usage.
     * @param _requestId the request ID for fulfillment.
     * @param _locationFound true if a location was found for the given coordinates, otherwise false.
     * @param _locationResult the location information (encoded as LocationResult).
     * @param _currentConditionsResult the current weather conditions (encoded as CurrentConditionsResult).
     */
    function fulfillLocationCurrentConditions(
        bytes32 _requestId,
        bool _locationFound,
        bytes memory _locationResult,
        bytes memory _currentConditionsResult
    ) public recordChainlinkFulfillment(_requestId) {
        if (_locationFound) {
            storeLocationResult(_requestId, _locationResult);
            storeCurrentConditionsResult(_requestId, _currentConditionsResult);
        }
    }

    /* ========== PRIVATE FUNCTIONS ========== */
    function storeRequestParams(
        bytes32 _requestId,
        uint256 _locationKey,
        string memory _endpoint,
        string memory _lat,
        string memory _lon,
        string memory _units
    ) private {
        RequestParams memory requestParams;
        requestParams.locationKey = _locationKey;
        requestParams.endpoint = _endpoint;
        requestParams.lat = _lat;
        requestParams.lon = _lon;
        requestParams.units = _units;
        requestIdRequestParams[_requestId] = requestParams;
    }

    function storeLocationResult(
        bytes32 _requestId,
        bytes memory _locationResult
    ) private {
        LocationResult memory result = abi.decode(
            _locationResult,
            (LocationResult)
        );
        requestIdLocationResult[_requestId] = result;
    }

    function storeCurrentConditionsResult(
        bytes32 _requestId,
        bytes memory _currentConditionsResult
    ) private {
        CurrentConditionsResult memory result = abi.decode(
            _currentConditionsResult,
            (CurrentConditionsResult)
        );
        requestIdCurrentConditionsResult[_requestId] = result;
    }

    /* ========== OTHER FUNCTIONS ========== */
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
}
