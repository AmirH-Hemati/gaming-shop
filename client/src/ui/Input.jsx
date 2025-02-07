function Input({ type, name, style, id, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={` ${style} outline-none text-white w-full md:w-1/2  border-2 border-[#0998A8]/50 rounded-sm p-3 `}
    />
  );
}

export default Input;
