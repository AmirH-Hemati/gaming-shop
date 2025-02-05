function FormLabel({ children, label }) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </div>
  );
}

export default FormLabel;
