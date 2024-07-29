// import React from 'react';
// import { getCountries, getCountryCallingCode, labels } from 'react-phone-number-input';
// import { CountrySelectComponentProps } from "react-phone-number-input/react-hook-form";
// import 'react-phone-number-input/style.css';

// const CustomCountrySelect: React.FC<CountrySelectComponentProps> = ({ value, onChange, labels }) => {
//   const countries = getCountries();

//   return (
//     <select
//       value={value}
//       onChange={(event) => onChange(event.target.value)}
//       style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//     >
//       {countries.map((country) => (
//         <option key={country} value={country}>
//           {country} ({labels[country]})
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CustomCountrySelect;

// import React from 'react';
// import { getCountries, Country } from 'react-phone-number-input';
// import { CountrySelectComponentProps } from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';

// const CustomCountrySelect: React.FC<CountrySelectComponentProps> = ({ value, onChange, labels }) => {
//   const countries = getCountries();

//   return (
//     <select
//       value={value}
//       onChange={(event) => onChange(event.target.value as Country)}
//       style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//     >
//       {countries.map((country) => (
//         <option key={country} value={country}>
//           {country} ({labels[country]})
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CustomCountrySelect;

// import React from 'react';
// import { getCountries, Country } from 'react-phone-number-input';
// import { CountrySelectComponentProps } from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';

// const CustomCountrySelect: React.FC<CountrySelectComponentProps> = ({ value, onChange, labels }) => {
//   const countries = getCountries();

//   return (
//     <select
//       value={value}
//       onChange={(event) => onChange(event.target.value as Country)}
//       style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//     >
//       {countries.map((country) => (
//         <option key={country} value={country}>
//           {country} ({labels[country]})
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CustomCountrySelect;

import React from "react";
import { getCountries, Country, Labels } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface CustomCountrySelectProps {
  value?: Country;
  onChange: (value: Country) => void;
  labels: Labels;
}

const CustomCountrySelect: React.FC<CustomCountrySelectProps> = ({
  value,
  onChange,
  labels,
}) => {
  const countries = getCountries();

  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as Country)}
      style={{
        padding: "8px",
        paddingLeft: "0",
        color: "#101828",
        backgroundRepeat: "no-repeat",
        backgroundSize: "16px",
        appearance: "none",
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 0.5L5 4.5L9 0.5" stroke="%23667085" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')`,
        backgroundColor: "white",
        paddingRight: "20px",
        backgroundPosition: "right 10px center",
      }}
      className="text-base outline-none cursor-pointer font-normal"
    >
      {countries.map((country) => (
        <option key={country} value={country}>
          {/* {country} ({labels[country]}) */}
          {country}
        </option>
      ))}
    </select>
  );
};

export default CustomCountrySelect;
