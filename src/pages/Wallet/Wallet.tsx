import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SalesCard from "../../components/SalesCard/SalesCard";
import Footer from "../../components/Footer/Footer";
import TransactionContext, {
  TransactionContextType,
} from "../../context/TransactionContext";

const Wallet = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className="mt-10 px-5 flex justify-center items-center space-x-0 md:mt-20 md:space-x-2 md:px-20 md:justify-start md:items-start flex-col space-y-3 md:grid md:grid-cols-12 md:space-y-0">
        <div className="col-span-7 flex flex-col space-y-12">
          <div className="flex flex-col justify-center items-center space-y-0 md:space-y-2 md:justify-start md:items-start">
            <h1 className="text-3xl font-bold lg:text-5xl">Be an early bird</h1>
            <p className="max-w-2xl text-sm text-center font-normal md:pl-3 md:text-lg md:text-left">
              It would take months before official project launch, so you should
              buy only if you can wait for the launch to trade your coins.
            </p>
          </div>

          {/* Sales Timeline */}
          <ol className="hidden md:block border-l-2 space-y-6 border-blue">
            <li>
              <div className="flex flex-start items-center">
                <div className="bg-light-blue w-6 h-6 rounded-full -ml-3 mr-3 -mt-2">
                  <div className="bg-blue w-4 h-4 rounded-full ml-1 mt-1"></div>
                </div>
                <p className="text-dark font-semibold text-lg capitalize">
                  sale pending
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-blue w-4 h-4 rounded-full -ml-2 mr-3 -mt-2"></div>
                <p className="text-dark font-semibold text-lg capitalize">
                  sale live
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-blue w-4 h-4 rounded-full -ml-2 mr-3 -mt-2"></div>
                <p className="text-dark font-semibold text-lg capitalize">
                  sale completed
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-blue w-4 h-4 rounded-full -ml-2 mr-3 -mt-2"></div>
                <p className="text-dark font-semibold text-lg capitalize">
                  vesting started
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-start items-center">
                <div className="bg-blue w-4 h-4 rounded-full -ml-2 mr-3 -mt-2 -mb-5"></div>
                <p className="text-dark font-semibold text-lg capitalize">
                  exx launched
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-span-5">
          <SalesCard />
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default Wallet;
