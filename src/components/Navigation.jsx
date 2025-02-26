import { useState } from "react";
import { Link } from "@mui/material";

const Navigation = () => {
  const [selected, setSelected] = useState("refer");

  return (
    <div className="w-full flex justify-center items-center mt-6 -mb-3">
      <div className="bg-[#1A73E81C] flex justify-center items-center gap-24 w-[797px] h-[63px] rounded-full max-sm:gap-14">
        {["refer", "benefits", "faqs", "support"].map((item) => (
          <Link
            key={item}
            underline="none"
            href={`#${item}`}
            className={`text-[#1A73E8] text-center relative`}
            onClick={() => setSelected(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {selected === item && (
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] absolute -bottom-[10px] right-[15px]" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
