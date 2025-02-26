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
import hero from "../assets/image.png";
import axios from "axios";
import { useState } from "react";
import hero1 from "../assets/verticalBenfits.png";

const Refer = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center w-full bg-blue-200 gap-14 p-8">
        <h1 className="text-3xl">
          How Do I <span className="text-blue-500">Refer?</span>
        </h1>
        <div className="flex flex-col justify-center items-center p-8 max-sm:p-0">
          <img src={hero} className="w-full h-[497px] max-sm:hidden" alt="" />
          <img src={hero1} alt="" className="block min-sm:hidden" />
          <Button
            variant="contained"
            size="large"
            sx={{ width: "236px", height: "64px" }}
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
      </div>
    </div>
  );
};

export default Refer;
