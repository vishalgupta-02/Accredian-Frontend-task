import { Link } from "@mui/material";

const Banner = () => {
  return (
    <div className="w-full bg-blue-200">
      <div className="flex justify-center items-center h-8 gap-4">
        <p className="text-sm">
          Navigate your ideal career path with tailored expert advice.
        </p>
        <Link href="#" className="text-sm">
          Contact expert
        </Link>
      </div>
    </div>
  );
};

export default Banner;
