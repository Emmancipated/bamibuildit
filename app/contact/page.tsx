"use client";
import Footer from "../components/Footer";
import Image from "next/image";
import excavator from "@/public/assets/images/excavator_two.png";
import InputComponent from "../components/InputComponent";
import TextAreaComponent from "../components/TextAreaComponent";
import PhoneNumberInput from "../components/PhoneNumber";
import { useState } from "react";
import {
  activateButton,
  ValidateEmail,
  ValidateText,
} from "../utils/Validators";
import Loading from "../components/LoadingComponent";

function Contact() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [errPhone, setErrPhone] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    success: "",
    failure: "",
  });

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validateSuccess, setValidateSuccess] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleInputs = (input: any) => {
    event?.preventDefault();
    if (input.target) {
      const { name, value, type } = input.target;
      const addColour = (elem: React.ChangeEvent<HTMLInputElement>) => {
        elem.target.classList.add("border-red-600");
        elem.target.classList.add("placeholder:text-red-600");
        elem.target.classList.remove("bg-cs-grey-55");
      };
      const removeColour = (elem: React.ChangeEvent<HTMLInputElement>) => {
        elem.target.classList.remove("border-red-600");
        elem.target.classList.remove("placeholder:text-red-600");
        elem.target.classList.add("bg-cs-grey-55");
      };
      if (value.length === 0) {
        // setErrorColour(true)
      } else if (name === "email") {
        if (!ValidateEmail(value)) {
          addColour(input);
          setValidateSuccess((prevState) => ({
            ...prevState,
            [name]: false,
          }));
        } else {
          removeColour(input);
          setValidateSuccess((prevState) => ({
            ...prevState,
            [name]: true,
          }));
        }
      } else if (type === "text" || "textarea") {
        if (!ValidateText(value)) {
          addColour(input);
          setValidateSuccess((prevState) => ({
            ...prevState,
            [name]: false,
          }));
        } else {
          removeColour(input);
          setValidateSuccess((prevState) => ({
            ...prevState,
            [name]: true,
          }));
        }
      }
      setFormData((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handlePhoneNumber = (input: any) => {
    if (formData.phone.length < 7) {
      setValidateSuccess((prevState) => ({
        ...prevState,
        phone: false,
      }));
      setErrPhone(true);
    } else {
      setValidateSuccess((prevState) => ({
        ...prevState,
        phone: true,
      }));
      setErrPhone(false);
    }
    if (!input) return;
    setFormData((prevState: any) => ({
      ...prevState,
      phone: input,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clearAll = () => {
      setInterval(() => {
        setResponse({ success: "", failure: "" });
      }, 4000);
    };
    try {
      // Send a POST request to the server
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const result = await response.json();

      // Show the success message
      setResponse({ success: result.message, failure: "" });
    } catch (error) {
      setLoading(true);
      // Handle errors
      setResponse({
        success: "",
        failure: "An error occured, please try again.",
      });
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
      clearAll();
    }
  };

  return (
    <div>
      <div className=" md:grid grid-cols-2">
        <Image src={excavator} alt="excavator" className=" hidden md:block" />
        <div className=" px-4 md:px-12">
          <h3 className=" text-4xl md:text-5xl font-semibold text-bb-gray-900">
            Let&apos;s work together
          </h3>
          <div className=" relative">
            <form onSubmit={handleSubmit}>
              <InputComponent
                action={handleInputs}
                errorMessage=""
                inputType="text"
                inputName="name"
                placeHolder="Your name"
                label="Name"
              />
              <InputComponent
                action={handleInputs}
                errorMessage=""
                inputType="email"
                inputName="email"
                placeHolder="you@company.com"
                label="Email"
              />
              <PhoneNumberInput
                label="Phone"
                action={handlePhoneNumber}
                errorMessage={errPhone ? "input your correct number" : ""}
                inputName="phone"
                value={formData.phone}
              />

              <TextAreaComponent
                action={handleInputs}
                errorMessage=""
                inputType="text"
                inputName="message"
                placeHolder="Tell us a little about the project..."
                label="How can we help?"
              />
              <div className=" my-4 w-full lg:max-w-[500px] mx-auto">
                <button
                  className=" text-base font-medium text-white bg-bb-primary-600 border-solid border-bb-primary-600 border w-full rounded-lg py-3 text-center disabled:bg-[#099250c7] hover:bg-[#099250e1] flex items-center justify-center"
                  disabled={!activateButton(validateSuccess)}
                  type="submit"
                >
                  {loading ? <Loading /> : "Get started"}
                </button>
              </div>
            </form>
            {response.success && (
              <div className="absolute bg-bb-primary-600 text-white font-normal text-base p-3 top-[50%] rounded-md">
                {response.success}
              </div>
            )}
            {response.failure && (
              <div className="absolute bg-red-600 text-white font-normal text-base p-3 top-[50%] rounded-md">
                {response.failure}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
