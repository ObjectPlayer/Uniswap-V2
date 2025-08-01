const networkConfig = {
    1337: {
        name:"localhost"
    },
    31337: {
        name:"localhost"        
    },
    11155111: {
        name: "sepolia",        
    },
    1: {
        name: "Ethereum",        
    }
}

const developmentChains = ["hardhat", "localhost"];

export default {
    networkConfig,
    developmentChains
}
