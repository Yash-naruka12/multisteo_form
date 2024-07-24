import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const PersonalInfo = ({ userData, setUserData }) => {
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === "name") {
        setNameError(
          value.length <= 3 ? "Name must be at least 4 characters" : ""
        );
      }

      if (name === "email") {
        setEmailError(
          !emailRegex.test(value) ? "Please provide a valid email address." : ""
        );
      }

      if (name === "phone") {
        setPhoneError(
          !phoneRegex.test(value)
            ? "Please enter a valid 10-digit phone number."
            : ""
        );
      }

      return updatedData;
    });
  };

  return (
    <div className="flex flex-col">
      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          variant="outlined"
          label="Enter your name"
          fullWidth
          name="name"
          id="name"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: nameError ? "#e55039" : "#78e08f",
              },
            },
          }}
          value={userData.name}
          onChange={handleChange}
        />
        {nameError && <span className="text-xs text-red-600">{nameError}</span>}
      </Typography>

      <Typography variant="div" sx={{ mb: "1rem" }}>
        <TextField
          variant="outlined"
          label="Enter your email"
          fullWidth
          name="email"
          id="email"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: emailError ? "#e55039" : "#78e08f",
              },
            },
          }}
          value={userData.email}
          onChange={handleChange}
        />
        {emailError && (
          <span className="text-xs text-red-600">{emailError}</span>
        )}
      </Typography>

      <TextField
        variant="outlined"
        label="Enter phone number"
        fullWidth
        name="phone"
        id="phone"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: phoneError ? "#e55039" : "#78e08f",
            },
          },
        }}
        value={userData.phone}
        onChange={handleChange}
      />
      {phoneError && <span className="text-xs text-red-600">{phoneError}</span>}
    </div>
  );
};

export default PersonalInfo;
