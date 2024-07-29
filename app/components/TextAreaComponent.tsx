function TextAreaComponent({
  label,
  action,
  errorMessage,
  inputType,
  inputName,
  placeHolder,
  requiredStatus,
}: {
  label: string;
  action: (input: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage: string;
  inputType: string;
  inputName: string;
  placeHolder: string;
  requiredStatus?: boolean;
}) {
  return (
    <div className=" mt-[22px] w-full lg:max-w-[500px] mx-auto">
      <label
        htmlFor={inputName}
        className=" text-sm font-medium text-bb-gray-750 block"
      >
        {label}
      </label>
      <textarea
        onChange={(e) => action(e)}
        name={inputName}
        className="py-3 px-4 border-bb-gray-300 border rounded-lg w-full mt-[6px] placeholder:text-bb-gray-500 placeholder:text-sm text-base font-normal outline-none resize-none shadow-1xl"
        placeholder={placeHolder}
        id={inputName}
        rows={3}
      />
      <p className="text-sm text-fm-error-red mt-1">{errorMessage}</p>
    </div>
  );
}

export default TextAreaComponent;
