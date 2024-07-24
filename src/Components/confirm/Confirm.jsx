import { TextField, Typography } from "@mui/material";
import React from "react";

const Confirm = ({ userData }) => {
  return (
    <div className="flex flex-col">
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your name" value={userData.name} fullWidth />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your email" value={userData.email} fullWidth />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your phone" value={userData.phone} fullWidth />
      </Typography>
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="Enter your address1"
          value={userData.address1}
          fullWidth
        />
      </Typography>
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="Enter your address2"
          value={userData.address2}
          fullWidth
        />
      </Typography>
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your city" value={userData.city} fullWidth />
      </Typography>
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your state" value={userData.state} fullWidth />
      </Typography>
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField label="Enter your zip" value={userData.zip} fullWidth />
      </Typography>
    </div>
  );
};

export default Confirm;
