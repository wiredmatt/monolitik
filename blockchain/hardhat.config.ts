import * as dotenv from 'dotenv'

import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { copy } from 'fs-extra'
import 'hardhat-abi-exporter'
import 'hardhat-gas-reporter'
import { HardhatUserConfig, task } from 'hardhat/config'
import { join } from 'path'
import 'solidity-coverage'

dotenv.config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const typechainExports = [
  // join(__dirname, '../frontend/dashboard/src/sc'),
  join(__dirname, '../backend/api/src/smart-contracts/types')
]

task(
  'accounts',
  'Prints the list of accounts',
  async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
      console.log(account.address)
    }
  }
)

task(
  'compile',
  'Compiles smart contracts and copies ABIs of contracts over to goldfish',
  async (_, __, runSuper) => {
    await runSuper() // compile

    for (const dest of typechainExports) {
      await copy(join(__dirname, 'typechain'), dest, {
        overwrite: true,
        recursive: true
      }) // copy over
    }
  }
)

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined
          ? [process.env.PRIVATE_KEY]
          : []
    },
    hardhat: {
      chainId: 1337
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD'
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  abiExporter: [
    {
      path: join(
        __dirname,
        '../backend/api/src/smart-contracts/ABIS'
      ),
      runOnCompile: true,
      clear: true,
      flat: true,
      spacing: 2,
      pretty: true,
      except: ['@openzeppelin']
    }
    // {
    //   path: join(__dirname, '../frontend/dashboard/src/abi'),
    //   runOnCompile: true,
    //   clear: true,
    //   flat: true,
    //   spacing: 2,
    //   pretty: true,
    //   except: ['@openzeppelin']
    // }
  ]
}

export default config
