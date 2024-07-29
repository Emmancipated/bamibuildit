// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import CustomCountrySelect from "./CountrySelect";
// import enLabels from "react-phone-number-input/locale/en.json"; // Importing default labels

// const PhoneNumberInput = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
//   console.log(phoneNumber);

//   return (
//     <div>
//       <PhoneInput
//         international
//         defaultCountry="NG"
//         value={phoneNumber}
//         onChange={setPhoneNumber}
//         countrySelectComponent={CustomCountrySelect} // Use the custom component
//         labels={enLabels} // Use default labels
//         className="h-[44px] px-[16px] py-[13px] border-[#CDD5E0] border rounded-[6px] w-full lg:max-w-[450px] mt-[6px] placeholder:text-[#A4ABB7] placeholder:text-sm text-base font-normal outline-none"
//       />
//     </div>
//   );
// };

// export default PhoneNumberInput;
