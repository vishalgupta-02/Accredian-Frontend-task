import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "../assets/hero.png";
import money from "../assets/b12ri590.png";
import money1 from "../assets/t0le0.png";
import money2 from "../assets/t0ri0.png";
import money3 from "../assets/t12r12.png";
import money4 from "../assets/t12b0.png";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerEmail: "",
    referrerName: "",
    referredEmail: "",
    referredName: "",
    programReferred: "",
    referralCode: "",
  });
  const [message, setMessage] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClose = () => {
    setOpen(false);
    setMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://accredian-backend-task-a6f6.onrender.com/api/referrals",
        formData
      );
      if (response.status === 200) {
        setMessage("Referral submitted successfully!");
      } else {
        setMessage("Error while submitting referral. Please try again.");
      }
      setMessage("Referral submitted successfully!");
    } catch (error) {
      setMessage("Error submitting referral. Please try again.");
      console.log(error);
    }
  };

  return (
    <div
      id="refer"
      className="w-full flex h-screen justify-center items-center"
    >
      <div className="w-[1300px] h-[600px] max-sm:w-full justify-evenly flex bg-blue-200 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 relative">
        <img
          src={money1}
          alt=""
          className="w-20 h-20 absolute left-0 top-0 z-20 max-lg:hidden"
        />
        <img
          src={money}
          alt=""
          className="w-36 h-36 absolute bottom-12 right-[590px] z-20 max-lg:hidden"
        />
        <img
          src={money2}
          alt=""
          className="w-20 h-20 absolute right-0 top-0 z-20 max-lg:hidden"
        />
        <img
          src={money3}
          alt=""
          className="w-36 h-36 absolute top-2 right-[440px] z-0 max-lg:hidden"
        />
        <img
          src={money4}
          alt=""
          className="w-36 h-36 absolute right-6 top-1/3 max-lg:hidden"
        />
        <div className="w-full flex flex-col justify-center items-start gap-5">
          <p className="text-[88px] font-bold text-black">
            Let&apos;s Learn <br /> & Earn
          </p>
          <p className="text-black text-[40px] mb-2">
            Get a chance to win <br />
            up-to
            <span className="text-blue-500"> Rs.15,000</span>
          </p>
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            sx={{ width: "192px", height: "54px" }}
          >
            Refer Now
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            sx={{ width: "100%", height: "100%" }}
          >
            <DialogTitle
              id="responsive-dialog-title"
              sx={{ color: "blue", fontSize: "40px", fontWeight: "500" }}
            >
              {"Referring Form"}
            </DialogTitle>
            <DialogContent sx={{ width: "500px", height: "100%" }}>
              <Stack spacing={3} sx={{ marginTop: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="FullName"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Your Friend's Email"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Your Friend's Name"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Program Referred"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Referral Code"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  onChange={handleChange}
                />
              </Stack>
              {message && (
                <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
              )}
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleSubmit}>
                Submit
              </Button>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="hidden md:block md:w-1/2 lg:w-[1800px] relative">
          <img
            src={Image}
            alt=""
            className="w-full absolute -bottom-7 right-0 max-w-9xl max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
