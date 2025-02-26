import { Button } from "@mui/material";
import Call from "../assets/banner1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Gradient from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="relative z-0 flex justify-center items-center bg-[#1A73E8] w-[1300px] h-[210px] gap-80 rounded-xl my-12 px-6 py-2">
        <div className="flex justify-center items-center gap-6">
          <img src={Call} className="w-20 h-20" alt="" />
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-white text-2xl">
              Want to delve deeper into the program?
            </h1>
            <p className="text-white text-md">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <div className="absolute -z-20">
          <img src={Gradient} alt="" className="w-full" />
        </div>
        <div className="flex justify-center items-center gap-44">
          <Button
            variant="outlined"
            sx={{
              color: "#3B82F6",
              bgcolor: "white",
              width: "200px",
              height: "55px",
            }}
          >
            Get in touch
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
