import { Button, Divider, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
  return (
    <div className="w-full bg-[#282828] flex justify-center items-center text-white max-sm:hidden">
      <div className="w-[1150px] flex flex-col justify-center gap-10">
        {/* Upper Part */}
        <div className="w-full flex justify-between items-center mt-10">
          <img src="./image.png" alt="" className="w-36" />
          <div className="flex flex-col justify-center items-center">
            <Button variant="contained" sx={{ padding: "12px 30px" }}>
              Schedule 1-on-1 Call Now
            </Button>
            <p className="text-white">Speak with our Learning Advisor</p>
          </div>
        </div>
        <Divider
          variant="fullWidth"
          sx={{ bgcolor: "whitesmoke", width: "1250px" }}
        />
        {/* Center Part */}
        <div className="flex gap-16 px-8 py-2">
          {/* Center Left */}
          <div className="w-1/3 flex items-start gap-4 flex-col">
            <h1 className="text-xl">Programs</h1>
            <Stack spacing={2}>
              <Button
                variant="text"
                sx={{
                  gap: "190px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Data Science & AI <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "150px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Product Management <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "175px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Business Analytics <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "135px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Digital Transformation <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "155px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Business Management <AddIcon />
              </Button>

              <Button
                variant="text"
                sx={{
                  gap: "160px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Project Management <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "150px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Strategy & Leadership <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "170px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Senior Management <AddIcon />
              </Button>
              <Button
                variant="text"
                sx={{
                  gap: "270px",
                  width: "380px",
                  height: "52px",
                  color: "white",
                }}
              >
                Fintech <AddIcon />
              </Button>
            </Stack>
          </div>
          {/* Center Center */}
          <div className="w-full flex flex-col items-start">
            <h1 className="text-xl">Contact Us</h1>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </p>
            <p>Why Accredian</p>
            <p>Follow Us</p>
            <div className="flex justify-center items-center gap-4 mt-5 cursor-pointer">
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
          {/* Center Right */}
          <div className="w-1/3 px-4 py-2">
            <h1 className="text-xl">Accredian</h1>
            <p>About</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Admission Policy</p>
            <p>Referral Policy</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Master FAQs</p>
          </div>
        </div>
        <div className="flex justify-center items-center my-10">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
