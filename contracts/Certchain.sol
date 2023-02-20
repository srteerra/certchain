// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Certchain {
    struct IPFSHash {
        string hash;
        string description;
        address user;
    }
    
    IPFSHash[] private ipfsHashes;
    
    mapping(address => uint[]) private userIndexes;
    mapping(string => uint) private hashIndexes;
    
    function addIPFSHash(string memory _hash, string memory _description) public {
        ipfsHashes.push(IPFSHash(_hash, _description, msg.sender));
        uint index = ipfsHashes.length - 1;
        userIndexes[msg.sender].push(index);
        hashIndexes[_hash] = index;
    }
    
    function getIPFSHashes() public view returns (IPFSHash[] memory) {
        return ipfsHashes;
    }
    
    function getUserIPFSHashes() public view returns (IPFSHash[] memory) {
        uint hashCount = ipfsHashes.length;
        uint userHashCount = 0;

        // Get the number of hashes stored by the user
        for (uint i = 0; i < hashCount; i++) {
            if (ipfsHashes[i].user == msg.sender) {
                userHashCount++;
            }
        }

        // Create a new array to store the user's hashes
        IPFSHash[] memory userHashes = new IPFSHash[](userHashCount);

        // Loop through all the hashes and add the ones belonging to the user to the new array
        uint userIndex = 0;
        for (uint i = 0; i < hashCount; i++) {
            if (ipfsHashes[i].user == msg.sender) {
                userHashes[userIndex] = ipfsHashes[i];
                userIndex++;
            }
        }

        return userHashes;
    }

    
    function editIPFSHashDescription(string memory _hash, string memory _newDescription) public {
        uint index = hashIndexes[_hash];
        require(index != 0 || (ipfsHashes.length > 0 && keccak256(abi.encode(ipfsHashes[0].hash)) == keccak256(abi.encode(_hash))), "Hash not found");
        require(ipfsHashes[index].user == msg.sender, "Only the user who added the hash can edit its description");

        ipfsHashes[index].description = _newDescription;
    }

    function deleteIPFSHash(string memory _hash) public {
        uint index = hashIndexes[_hash];
        require(index != 0 || (ipfsHashes.length > 0 && keccak256(abi.encode(ipfsHashes[0].hash)) == keccak256(abi.encode(_hash))), "Hash not found");
        require(ipfsHashes[index].user == msg.sender, "Only the user who added the hash can delete it");

        // Remove the hash from the ipfsHashes array
        ipfsHashes[index] = ipfsHashes[ipfsHashes.length - 1];
        hashIndexes[ipfsHashes[index].hash] = index;
        ipfsHashes.pop();
        delete hashIndexes[_hash];
    }
}