import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonalInfo from "../personal/PersonalInfo";
import AddressInfo from "../address/AddressInfo";
import Confirm from "../confirm/Confirm";

const steps = ["Personal Info", "Address Info", "Confirm"];

const MainForm = () => {
  const [active, setActive] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(userData));
  }, [userData]);

  const handleNextStep = () => {
    setActive((prevActiveSteps) => prevActiveSteps + 1);
  };

  const handleBackStep = () => {
    setActive((prevActiveSteps) => prevActiveSteps - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("submitedData", JSON.stringify(userData));
  };

  const changeSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="grid grid-cols-12 w-full mt-14 animation p-2">
            <div className="col-span-12 md:col-start-4 md:col-span-6 bg-gray-100 rounded-lg p-3 md:p-5 lg:p-10 shadow-xl">
              <PersonalInfo userData={userData} setUserData={setUserData} />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-12 w-full mt-14 p-2">
            <div className="col-span-12 md:col-start-4 md:col-span-6  bg-gray-100 rounded-lg p-3 md:p-5 lg:p-10 shadow-xl">
              <AddressInfo userData={userData} setUserData={setUserData} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-12 w-full mt-14 p-2">
            <div className="col-span-12 md:col-start-4 md:col-span-6 bg-gray-100 rounded-lg p-3 md:p-5 lg:p-10 shadow-xl">
              <Confirm userData={userData} />
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-12 w-full mt-14 p-2">
            <div className="col-span-12 md:col-start-4 md:col-span-6 flex justify-center items-center flex-col bg-gray-100 rounded-lg p-3 md:p-5 lg:p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="green"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <h3 className=" font-bold text-xl text-green-700 font-sans">
                Congratulations
              </h3>
              <p>Your account successfully created</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-2 md:p-5 lg:p-10">
      <Stepper className="w-full" activeStep={active}>
        {steps.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {changeSteps(active)}
      {active < steps.length && (
        <div className="flex justify-between items-center mt-4">
          <Typography>
            <Button
              variant="contained"
              disabled={active === 0}
              onClick={handleBackStep}
            >
              Back
            </Button>
          </Typography>

          <Typography variant="div">
            {active === steps.length - 1 ? (
              <Button
                variant="outlined"
                color="secondary"
                onClick={(handleSubmit, handleNextStep)}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleNextStep}
              >
                Next
              </Button>
            )}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default MainForm;
