import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomCountrySelect from "./CountrySelect";
import enLabels from "react-phone-number-input/locale/en.json"; // Importing default labels
import "./phoneStyle.css";

const PhoneNumberInput = ({
  label,
  action,
  errorMessage,
  inputName,
  requiredStatus,
  value,
}: {
  label: string;
  action: any;
  errorMessage: string;
  inputName: string;
  requiredStatus?: boolean;
  value: any;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");

  return (
    <div className=" mt-[22px] w-full lg:max-w-[500px] mx-auto">
      <label
        htmlFor={inputName}
        className=" text-sm font-medium text-bb-gray-750 block"
      >
        {label}
      </label>{" "}
      <PhoneInput
        international
        defaultCountry="NG"
        value={value}
        onChange={action}
        countrySelectComponent={CustomCountrySelect} // Use the custom component
        labels={enLabels} // Use default labels
        className="h-[44px] px-[16px] py-[13px] border-bb-gray-300 border rounded-[6px] w-full  mt-[6px] placeholder:text-[#A4ABB7] placeholder:text-sm text-base font-normal outline-none shadow-1xl"
      />
      <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
    </div>
  );
};

export default PhoneNumberInput;

{
  /* <div className=" mt-[22px] w-full">
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
  className="py-3 px-4 border-[#D0D5DD] border rounded-lg w-full mt-[6px] placeholder:text-[#A4ABB7] placeholder:text-sm text-base font-normal outline-none"
  placeholder={placeHolder}
  id={inputName}
/>
<p className="text-sm text-fm-error-red mt-1">{errorMessage}</p>
</div> */
}
