function FormLabel({ label, children }) {
  return (
    <div
      className={` w-full flex  flex-col md:flex-row  md:items-center justify-between border-b-2 border-[#0998A8]/50 py-3 md:py-6 font-semibold`}
    >
      <label
        htmlFor={children?.props?.id}
        className="flex items-center text-sm md:text-base"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormLabel;
