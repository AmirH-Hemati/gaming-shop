function Input({ type, name, style, id, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={` ${style} outline-none w-full md:w-1/2 bg-white text-black border-2 border-black/30 rounded-sm p-2 `}
    />
  );
}

export default Input;
