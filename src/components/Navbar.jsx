import { Button } from "@mui/material";
import BasicMenu from "./MenuButton.jsx";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center">
      <div className="w-[1300px] flex justify-between items-center my-20 max-sm:justify-center max-sm:gap-12">
        {/* Left Side */}
        <div className="flex justify-center items-center gap-16 max-sm:gap-32">
          <img src="./image.png" alt="" className="w-20" />
          <BasicMenu />
        </div>
        {/* Right Side */}
        <div className="flex justify-end items-center max-sm:hidden">
          <div className="flex justify-center items-center gap-8 m-6 text-md cursor-pointer">
            <p>Refer & Earn</p>
            <p>Resources</p>
            <p>About Us</p>
            <Button variant="contained" color="white">
              Login
            </Button>
            <Button variant="contained">Try For Free</Button>
          </div>
        </div>
        <div className="sm:hidden">
          <MenuIcon sx={{ width: "40px", height: "40px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
