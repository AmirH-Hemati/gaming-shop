import { Link } from "react-router-dom";

function IconCounter({ counter, to, children }) {
  return (
    <Link to={`/${to}`}>
      <div className="relative ">
        {children}
        <p className="text-sm flex items-center justify-center w-4 h-4 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
          {counter?.()}
        </p>
      </div>
    </Link>
  );
}

export default IconCounter;
