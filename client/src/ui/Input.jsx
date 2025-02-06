function Input({ type, name, id }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="w-full md:w-1/2 rounded-sm p-3 border-2 border-[#0998a8] outline-none"
    />
  );
}

export default Input;
