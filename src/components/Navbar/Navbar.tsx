import React from "react";
import MenuIcon from "../../assets/icons/menu_icon.svg";
import WalletIcon from "../../assets/icons/wallet_icon.svg";
import DownloadIcon from "../../assets/icons/download_icon.svg";
import SlantArrowIcon from "../../assets/icons/slant_arrow_icon.svg";
import BinanceImg from "../../assets/images/binanc_img.png";
import CustomBtn from "../CustomBtn/CustomBtn";
import TransactionContext, {
  TransactionContextType,
} from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";

const Navbar = () => {
  const { connectWallet, disconnectWallet, currentAccount } = React.useContext(
    TransactionContext
  ) as TransactionContextType;

  const handleBSCMiannet = () => {};
  const downloadTokenomics = () => {};

  return (
    <nav className="px-5 py-6 lg:px-16 w-full h-[100px]">
      <div className="flex justify-between">
        {/* Logo */}
        <div className="">
          <h1 className="font-bold text-xl text-dak-blue capitalize">
            logo here
          </h1>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex space-x-4">
          <div className="lg:hidden border rounded-lg px-1.5 bg-light-green flex w-full h-full">
            <img src={WalletIcon} alt="menu-icon" className="w-full h-full" />
          </div>

          <div className="lg:hidden flex w-full h-full">
            <img src={MenuIcon} alt="menu-icon" className="w-full h-full" />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-5">
          <CustomBtn
            className="flex font-semibold text-sm capitalize whitespace-nowrap"
            leftIcon={
              <img
                src={DownloadIcon}
                alt="download-icon"
                className="w-[28px] h-[18px] mr-2"
              />
            }
            onClick={downloadTokenomics}
          >
            download tokenomics
          </CustomBtn>

          {!currentAccount ? (
            <CustomBtn
              className="bg-blue px-8 py-[14.5px] whitespace-nowrap capitalize flex rounded-lg text-sm text-white"
              rightIcon={
                <img
                  src={SlantArrowIcon}
                  alt="slant-arrow-icon"
                  className="pl-6 mt-1"
                />
              }
              onClick={connectWallet}
            >
              connect wallet
            </CustomBtn>
          ) : (
            <div className="hidden md:flex space-x-3">
              <CustomBtn
                className="bg-light-blue px-8 py-2.5 whitespace-nowrap capitalize flex items-center rounded-lg font-medium text-sm text-dark"
                leftIcon={
                  <img
                    src={BinanceImg}
                    alt="slant-arrow-icon"
                    className="pr-3"
                  />
                }
                onClick={handleBSCMiannet}
                type="button"
                role="button"
              >
                BSC Miannet
              </CustomBtn>

              <div className="group relative inline-block">
                <CustomBtn
                  className="bg-light-blue px-8 py-3.5 whitespace-nowrap flex rounded-lg text-sm text-blue"
                  onClick={disconnectWallet}
                  type="button"
                  role="button"
                >
                  {shortenAddress(currentAccount)}
                </CustomBtn>

                <div className="capitalize absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-white py-3 px-5 text-sm font-medium text-dark opacity-0 group-hover:opacity-100">
                  <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-white"></span>
                  disconnect wallet
                </div>
              </div>
            </div>
          )}

          {/* {!currentAccount && (
            <CustomBtn
              className="bg-blue px-8 py-[14.5px] whitespace-nowrap capitalize flex rounded-lg text-sm text-white"
              rightIcon={
                <img
                  src={SlantArrowIcon}
                  alt="slant-arrow-icon"
                  className="pl-6 mt-1"
                />
              }
              onClick={connectWallet}
            >
              connect wallet
            </CustomBtn>
          )} */}

          {/* <div className="hidden md:flex space-x-3">
            <CustomBtn
              className="bg-light-blue px-8 py-2.5 whitespace-nowrap capitalize flex items-center rounded-lg font-medium text-sm text-dark"
              leftIcon={
                <img src={BinanceImg} alt="slant-arrow-icon" className="pr-3" />
              }
              onClick={handleBSCMiannet}
              type="button"
              role="button"
            >
              BSC Miannet
            </CustomBtn>

            <div className="group relative inline-block">
              <CustomBtn
                className="bg-light-blue px-8 py-3.5 whitespace-nowrap flex rounded-lg text-sm text-blue"
                onClick={connectWallet}
                type="button"
                role="button"
              >
                {shortenAddress(currentAccount)}
              </CustomBtn>

              <div className="capitalize absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-white py-3 px-5 text-sm font-medium text-dark opacity-0 group-hover:opacity-100">
                <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-white"></span>
                disconnect wallet
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
