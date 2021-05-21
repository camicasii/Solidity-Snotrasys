import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
const contractAddr = process.env.CONTRACT_ADDRESS
const tokenAddr = process.env.TOKEN_ADDRESS

export const approve = async (Contract,account) => {
  return Contract.methods
    .approve(contractAddr, ethers.constants.MaxUint256)
    .send({ from: account })
} 

export const allowance = async (Contract,account) => {
  return Contract.methods
    .allowance(account,contractAddr)
    .call()
} 

export const getData  = (Contract, ContractAddress, account) => {
  return Contract.methods
    .approve(ContractAddress, ethers.constants.MaxUint256)
    .call()
}

export const invests  = (Contract, ref, amount ,account) => {
  return Contract.methods
    .invest(ref, amount)
    .send({ from: account })
}

export const withdraw  = (Contract, account) => {
  return Contract.methods
    .withdraw()
    .send({ from: account })
}

export const reinvestment  = (Contract, ContractAddress, account) => {
  return Contract.methods
    .reinvestment()
    .send({ from: account })
}

export const getUserData  = (Contract, address) => {
  return Contract.methods
    .getUserData(address)
    .call()
}

export const getPublicData = (Contract, address) => {
  return Contract.methods
    .getPublicData(address)
    .call()
}

