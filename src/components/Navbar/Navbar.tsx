import React from "react";
import MenuIcon from "../../assets/icons/menu_icon.svg";
import WalletIcon from "../../assets/icons/wallet_icon.svg";
import DownloadIcon from "../../assets/icons/download_icon.svg";
import SlantArrowIcon from "../../assets/icons/slant_arrow_icon.svg";
import BinanceImg from "../../assets/images/binanc_img.png";
import CustomBtn from "../CustomBtn/CustomBtn";

const Navbar = () => {
  const handleConnectWallet = () => {};
  const handleDownloadTokenomics = () => {};
  const handleBSCMiannet = () => {};

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
          >
            download tokenomics
          </CustomBtn>

          <CustomBtn
            className="bg-blue px-8 py-[14.5px] whitespace-nowrap capitalize flex rounded-lg text-sm text-white"
            rightIcon={
              <img
                src={SlantArrowIcon}
                alt="slant-arrow-icon"
                className="pl-6 mt-1"
              />
            }
            onClick={handleDownloadTokenomics}
          >
            connect wallet
          </CustomBtn>

          <div className="hidden md:flex space-x-3">
            <CustomBtn
              className="bg-light-blue px-8 py-3.5 whitespace-nowrap capitalize flex items-center rounded-lg font-medium text-sm text-dark"
              leftIcon={
                <img src={BinanceImg} alt="slant-arrow-icon" className="pr-3" />
              }
              onClick={handleBSCMiannet}
              type="button"
              role="button"
            >
              BSC Miannet
            </CustomBtn>

            <CustomBtn
              className="bg-light-blue px-8 py-3.5 whitespace-nowrap flex rounded-lg text-sm text-blue"
              onClick={handleConnectWallet}
              type="button"
              role="button"
            >
              connect wallet
            </CustomBtn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
