"use client";
import { useState } from "react";

const InputComponent = ({
  label,
  action,
  errorMessage,
  inputType,
  inputName,
  placeHolder,
  requiredStatus,
}: {
  label: string;
  action: (input: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  inputType: string;
  inputName: string;
  placeHolder: string;
  requiredStatus?: boolean;
}) => {
  const [checkPassword, setCheckPassword] = useState(false);

  return (
    <>
      {inputType === "password" ? (
        <div className="flex flex-col mt-[24px] lg:max-w-[500px] mx-auto">
          <label
            htmlFor={inputName}
            className=" text-sm font-medium text-bb-gray-750 block"
          >
            {label}
          </label>{" "}
          <div>
            <div className="relative">
              <input
                onChange={(e) => action(e)}
                type={checkPassword ? "text" : "password"}
                name={inputName}
                className="h-[44px] px-[16px] py-[13px] border-bb-gray-300 border rounded-[6px] w-full lg:max-w-[450px] mt-[6px] placeholder:text-bb-gray-500 placeholder:text-sm shadow-1xl"
                placeholder={placeHolder}
                id={inputName}
              />
            </div>
            <p className="text-sm text-fm-error-red mt-1">{errorMessage}</p>
          </div>
        </div>
      ) : (
        <div className=" mt-[22px] w-full lg:max-w-[500px] mx-auto">
          <label
            htmlFor={inputName}
            className=" text-sm font-medium text-bb-gray-750 block"
          >
            {label}
          </label>
          <input
            onChange={(e) => action(e)}
            type={inputType}
            name={inputName}
            className="py-3 px-4 border-bb-gray-300 border rounded-lg w-full mt-[6px] placeholder:text-bb-gray-500 placeholder:text-sm text-base font-normal outline-none block shadow-1xl"
            placeholder={placeHolder}
            id={inputName}
          />
          <p className="text-sm text-fm-error-red mt-1">{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default InputComponent;
