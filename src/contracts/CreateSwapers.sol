/// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <=0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "./SwapInstantaneo.sol";

contract CreadorDeContratosSwapAutomactico {
    // List of existing projects
    mapping(address => SwapInstantaneo) private projects;
    mapping(address => bool) private hasProject;
    uint256 proyectsCount;

    // Event que se emite cuando se crea un nuevo contrato de swap automático
    event ProjectStarted(
        address contractAddress,
        address projectStarter,
        string projectTitle,
        uint256 goalAmount
    );

    // Function para asignar un contrato de swap automático a un negocio .
    // Title, del proyecto
    // amountToRaise, monto que activa el swap automático

    function startProject(string calldata title, uint256 amountToRaise)
        external
    {
        require(
            !hasProject[msg.sender],
            "Solo puedes tener una contrato activo"
        );

        SwapInstantaneo newProject = new SwapInstantaneo(
            payable(msg.sender),
            title,
            amountToRaise
        );
        projects[msg.sender] = newProject;
        hasProject[msg.sender] = true;

        emit ProjectStarted(
            address(newProject),
            msg.sender,
            title,
            amountToRaise
        );
    }

    function getMyProyect() public view returns (SwapInstantaneo) {
        return projects[msg.sender];
    }

    function getHaveProyect() public view returns (bool) {
        return hasProject[msg.sender];
    }

    function getProyectByAddress(address _owner)
        public
        view
        returns (SwapInstantaneo)
    {
        return projects[_owner];
    }

    function getHaveProyectByAddress(address _owner)
        public
        view
        returns (bool)
    {
        return hasProject[_owner];
    }
}
