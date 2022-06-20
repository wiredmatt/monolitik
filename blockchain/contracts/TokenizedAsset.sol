//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @author Mateo Carriqui

contract TokenizedAsset is ERC20, Ownable {
  uint256 public supply;
 
  /**
   * @param _supply amount of tokens that represent the asset
   * @param _name name of the asset
   * @param _symbol symbol of the asset
   */
  constructor(string memory _name, string memory _symbol, address _recipient, uint256 _supply) ERC20(_name, _symbol) {
    _mint(_recipient, _supply);
    supply = _supply;
  }

}
