import "tw-elements";
import CustomBtn from "../CustomBtn/CustomBtn";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";

export interface SalesCardProps {
  balance: string | undefined;
}

const SalesCard = ({ balance }: SalesCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(({ amount }) => {
    console.log(amount);
  });

  return (
    <div className="flex flex-col space-y-3">
      <div className="hidden md:block bg-light-blue w-fit px-4 py-3 rounded-md text-blue">
        <p className="text-xs">Your bal: {balance ?? "0.0000000 USDT"}</p>
      </div>

      <div className="bg-white px-2 py-4 flex flex-col space-y-6 w-full rounded-lg md:px-5 md:justify-center">
        <div className="flex justify-between px-2">
          <h1 className="font-bold text-xl">10:20:30</h1>
          <CustomBtn className="bg-dark-yellow rounded-md font-medium text-xs px-3 py-3 md:rounded-full md:px-6">
            Pending
          </CustomBtn>
        </div>

        {/* Sale Progress */}
        <div className="space-y-2">
          <p className="capitalize text-xs text-gray">sale progress</p>
          <div className="w-full bg-light-blue h-3 rounded-full">
            <div
              className="bg-blue h-3 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        {/* Buy USDT */}
        <div className="space-y-2">
          {/* <p className="text-xs font-semibold">Enter amount to buy</p> */}

          <form
            className="grid grid-cols-12 space-x-1 md:space-x-2"
            onSubmit={onSubmit}
          >
            <div className="relative col-span-9">
              <Input
                type="text"
                id="amount"
                label="Enter amount to buy"
                errors={errors}
                register={register}
                required={true}
                placeholder="00.00 USDT"
                validationSchema={{
                  required: "Amount is required",
                }}
                className="-mt-4 py-3 px-3 w-full border border-blue rounded-[10px] focus:border-blue"
                data-testid="amount-input"
                containerClassName="space-y-2"
              />

              <div className="hidden lg:flex space-x-2 absolute inset-y-0 right-4 top-[45px]">
                <hr className="border-gray rotate-90 w-6 mt-[0.7rem]" />
                <p className="text-gray">00.00 EXX</p>
              </div>
            </div>

            <div className="col-span-3">
              <CustomBtn
                className="py-3 px-5 mt-[33px] rounded-md text-white text-xs bg-blue capitalize w-full"
                type="submit"
                role="button"
              >
                buy
              </CustomBtn>
            </div>
          </form>

          <div className="flex space-x-12 md:space-x-6">
            <p className="text-xs text-gray whitespace-nowrap">
              Min. Buy: <span className="font-semibold text-dark">30 USDT</span>
            </p>

            <p className="text-xs text-gray">
              Max. Buy:{" "}
              <span className="font-semibold text-dark">10,000 USDT</span>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-2">
          <p className="font-semibold capitalize text-xs">disclaimer</p>
          <p className="text-xs text-light-gray">
            The information provided shall not in any way constitute a
            recommendation as to whether you should invest in any product
            discussed.{" "}
            <span className="text-dark">
              {" "}
              We accept no liability for any loss.
            </span>
          </p>
        </div>
      </div>

      <div className="hidden md:flex bg-transparent-green px-2 py-4 flex-col space-y-3 w-full rounded-md md:px-5 md:justify-center">
        <p className="text-xs font-semibold capitalize">your contribution</p>
        <div className="flex space-x-8">
          <p className="text-xs">
            You contributed <span className="font-semibold">30 USDT</span>
          </p>
          <p className="text-xs">
            You have <span className="font-semibold">30 EXX</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
