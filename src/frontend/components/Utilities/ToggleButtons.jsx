import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons({ value, options = [], onChange, wrap = false, center = false }) {
  const handleAlignment = (event, newOption) => {
    if (newOption !== null && onChange) {
      console.log("newOption", newOption);
      onChange(newOption);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        borderRadius: "99px",
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: center ? "center" : "flex-start",
        padding: "4px",
        // remove the default group borders
        "& .MuiToggleButtonGroup-grouped": {
          margin: 0,
          border: "none",
          borderRadius: "999px !important",
        },
        "& .MuiToggleButton-root": {
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "0.75rem",
          padding: "6px 18px",
          color: "#6b7280",
          border: "none",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.04)",
          },
          "&.Mui-selected": {
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
          },
        },
      }}
      // style={{marginTop:'10px', borderRadius:'30px'}}
    >
      {options.map((item) => (
        <ToggleButton key={item.value} value={item.value} aria-label={item.label}>
          {item.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
