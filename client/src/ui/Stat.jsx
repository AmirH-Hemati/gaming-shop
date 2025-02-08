function Stat({ icon, title, value, color }) {
  return (
    <div className="flex-1 bg-white shadow-custom flex items-center gap-2 p-1 rounded-sm">
      <div className={`p-4 rounded-full`} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div>
        <p className="text-[#0998A8]">{title}</p>
        <p className="text-[#192938] text-2xl">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
