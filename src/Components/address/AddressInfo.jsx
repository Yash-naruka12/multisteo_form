import React from "react";
import { TextField, Typography } from "@mui/material";

const AddressInfo = ({ userData, setUserData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      console.log("Address updated:", updatedData); // Debugging
      return updatedData;
    });
  };

  return (
    <div className="flex flex-col">
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="Address line 1"
          fullWidth
          name="address1"
          id="address1"
          value={userData.address1}
          onChange={handleChange}
        />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="Address line 2"
          fullWidth
          name="address2"
          id="address2"
          value={userData.address2}
          onChange={handleChange}
        />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="City"
          fullWidth
          name="city"
          id="city"
          value={userData.city}
          onChange={handleChange}
        />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="State"
          fullWidth
          name="state"
          id="state"
          value={userData.state}
          onChange={handleChange}
        />
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          label="Zip code"
          fullWidth
          name="zip"
          id="zip"
          value={userData.zip}
          onChange={handleChange}
        />
      </Typography>
    </div>
  );
};

export default AddressInfo;
