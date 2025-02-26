import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function BasicList() {
  return (
    <List
      sx={{
        borderRadius: "5px",
        width: "290px",
      }}
    >
      <ListItem
        disablePadding
        sx={{
          bgcolor: "#1A73E8",
          borderRadius: "5px 5px 0 0",
          width: "285px",
          padding: "5px",
        }}
      >
        <ListItemButton>
          <ListItemText primary="ALL PROGRAMS" sx={{ color: "white" }} />
          <ListItemIcon
            sx={{ minWidth: "0px", color: "white", padding: "0px" }}
          >
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="PRODUCT MANAGEMENT"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider sx={{ color: "black" }} />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="STRATEGY & MANAGEMENT"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="BUSINESS MANAGEMENT"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="FINTECH"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="SENIOR MANAGEMENT"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="DATA SCIENCE"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="DIGITAL TRANSFORMATION"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding sx={{ padding: "5px" }}>
        <ListItemButton sx={{ width: "238px", height: "43px" }}>
          <ListItemText
            primary="BUSINESS ANALYTICS"
            sx={{ color: "#3C4852", padding: "1px" }}
          />
          <ListItemIcon sx={{ minWidth: "0px" }}>
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
