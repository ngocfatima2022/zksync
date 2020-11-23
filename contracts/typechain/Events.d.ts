/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import { Contract, ContractTransaction } from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EventsInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "BlockCommit(uint32)": EventFragment;
    "BlockVerification(uint32)": EventFragment;
    "BlocksRevert(uint32,uint32)": EventFragment;
    "DepositCommit(uint32,uint32,address,uint16,uint128)": EventFragment;
    "ExodusMode()": EventFragment;
    "FactAuth(address,uint32,bytes)": EventFragment;
    "FullExitCommit(uint32,uint32,address,uint16,uint128)": EventFragment;
    "NewPriorityRequest(address,uint64,uint8,bytes,uint256)": EventFragment;
    "OnchainDeposit(address,uint16,uint128,address)": EventFragment;
    "OnchainWithdrawal(address,uint16,uint128)": EventFragment;
    "PendingWithdrawalsAdd(uint32,uint32)": EventFragment;
    "PendingWithdrawalsComplete(uint32,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BlockCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlockVerification"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocksRevert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExodusMode"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FactAuth"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FullExitCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPriorityRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OnchainDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OnchainWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingWithdrawalsAdd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingWithdrawalsComplete"): EventFragment;
}

export class Events extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EventsInterface;

  functions: {};

  callStatic: {};

  filters: {
    BlockCommit(blockNumber: BigNumberish | null): EventFilter;

    BlockVerification(blockNumber: BigNumberish | null): EventFilter;

    BlocksRevert(
      totalBlocksVerified: null,
      totalBlocksCommitted: null
    ): EventFilter;

    DepositCommit(
      zkSyncBlockId: BigNumberish | null,
      accountId: BigNumberish | null,
      owner: null,
      tokenId: BigNumberish | null,
      amount: null
    ): EventFilter;

    ExodusMode(): EventFilter;

    FactAuth(sender: string | null, nonce: null, fact: null): EventFilter;

    FullExitCommit(
      zkSyncBlockId: BigNumberish | null,
      accountId: BigNumberish | null,
      owner: null,
      tokenId: BigNumberish | null,
      amount: null
    ): EventFilter;

    NewPriorityRequest(
      sender: null,
      serialId: null,
      opType: null,
      pubData: null,
      expirationBlock: null
    ): EventFilter;

    OnchainDeposit(
      sender: string | null,
      tokenId: BigNumberish | null,
      amount: null,
      owner: string | null
    ): EventFilter;

    OnchainWithdrawal(
      owner: string | null,
      tokenId: BigNumberish | null,
      amount: null
    ): EventFilter;

    PendingWithdrawalsAdd(
      queueStartIndex: null,
      queueEndIndex: null
    ): EventFilter;

    PendingWithdrawalsComplete(
      queueStartIndex: null,
      queueEndIndex: null
    ): EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
