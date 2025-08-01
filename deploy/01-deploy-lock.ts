import { network} from "hardhat";
import * as helper from "../helper-hardhat.config" 

module.exports = async ({ getNamedAccounts:any, deployments,}) => {
    const { log, deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    const chainId = network.config.chainId;

    let lock = await deploy("Lock", {
        from: deployer,
        args: [],
        waitConfirmation:1,
    })

    let lockContractAddress = lock.address;
    log(`lock contract address : ${lockContractAddress}`);


    if (!developmentChains.includes(networkConfig[chainId].name)) {
        //verify contract
    }
  
}


module.exports.tags = ["lock"]