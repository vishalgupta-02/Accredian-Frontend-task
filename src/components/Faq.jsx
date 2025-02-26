import { Button, Stack } from "@mui/material";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Banner from "./Banner";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const labels = ["Eligibility", "How To Use", "Terms & Conditions"];

const Faq = () => {
  const [value, setValue] = useState("1");
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedButton, setSelectedButton] = useState("Eligibility");

  return (
    <div className="w-full h-screen max-sm:hidden" id="faqs">
      <div className="w-full flex flex-col mt-20 justify-center items-center">
        <h1 className="text-3xl font-bold">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h1>
        <div className="flex justify-between mt-24 gap-5 w-[1200px]">
          <div>
            <Stack spacing={2}>
              {labels.map((label, index) => (
                <Button
                  key={index}
                  variant={selectedButton === label ? "contained" : "outlined"}
                  onClick={() => setSelectedButton(label)}
                  sx={{
                    backgroundColor:
                      selectedButton === label ? "#1976d2" : "transparent",
                    color: selectedButton === label ? "#fff" : "#1976d2",
                    borderColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                      color: "#fff",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </div>
          <div className="flex justify-between w-[900px] border-none border">
            <Stack spacing={1} direction={"column"} sx={{ border: "none" }}>
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  sx={{
                    height: "30px",
                    maxWidth: "900px",
                    border: "none",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <Tab
                    label="Do I need to have prior Product Management and Project Management experience to enroll in the program?"
                    value="1"
                    onClick={() => setIsOpen(!isOpen)}
                    sx={{
                      maxWidth: "900px",
                      textTransform: "initial",
                      border: "none",
                      padding: "0px",
                      fontSize: "16px",
                    }}
                  />
                  <KeyboardArrowUpIcon
                    onClick={() => setIsOpen(!isOpen)}
                    sx={{ width: "24px", height: "24px", cursor: "pointer" }}
                  />
                </TabList>
                <TabPanel
                  value="1"
                  sx={{
                    width: "900px",
                    padding: "0px",
                    display: isOpen ? "block" : "none",
                  }}
                >
                  No, the program is designed to be inclusive of all levels of
                  experience. All topics will be covered from the basics, making
                  it suitable for individuals from any field of work.
                </TabPanel>
              </TabContext>
            </Stack>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Faq;
