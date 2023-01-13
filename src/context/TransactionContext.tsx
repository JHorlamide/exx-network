import React, { useEffect, useState, ReactNode } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../utils/constants";

export interface TransactionContextType {
  balance: string | null;
  currentAccount: string;
  buy: () => Promise<void>;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const TransactionContext = React.createContext<
  TransactionContextType | undefined
>({} as TransactionContextType);

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return { transactionsContract, provider, signer };
};

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }

      const account = await ethereum.request({ method: "eth_accounts" });
      if (account.length) {
        setCurrentAccount(account[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install MetaMask.");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const getBalance = async () => {
    try {
      const { signer } = createEthereumContract();
      const balance = await signer.getBalance();
      const formattedBalance = ethers.utils.formatEther(balance);
      setBalance(formattedBalance);
    } catch (error) {
      console.log("Error getting balance \n", error);
      return error;
    }
  };

  const buy = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }

      const { transactionsContract } = createEthereumContract();
      const balance = await transactionsContract.buy();
      console.log(balance);
      setBalance(balance);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  // I found out that is currently no way to trigger MetaMask account
  // disconnection in a similar way than triggering connection with the
  // window.metamask.request({ method: 'eth_requestAccounts' }) method.

  // One way, is to listen to the disconnection event and then perform the
  // logic when the user manually disconnects from the MetaMask UI.
  // So I decide to implement this simple function instead.
  const disconnectWallet = () => {
    setBalance("0");
    setCurrentAccount("");
  };

  useEffect(() => {
    getBalance();
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        buy,
        balance,
        currentAccount,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
