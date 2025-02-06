function FormLabel({ children, label }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 text-sm">
      <label className="w-1/2" htmlFor={children.props.id}>{label}</label>
      {children}
    </div>
  );
}

export default FormLabel;
