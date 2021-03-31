import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PinDropSharp } from "@material-ui/icons";
import DatePicker from "./../components/common/DatePicker";
import DropOffComponent from "./DropOffComponent";
import { toast } from "react-toastify";
import AvailableVehicles from "./AvailableVehicles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Pick Up", "Drop Off", "Available Vehicles", "Confirm Booking"];
}

function getStepContent(
  step,
  pickupDate,
  setPickupDate,
  dropoffDate,
  setDropoffDate,
  location,
  setLocation
) {
  switch (step) {
    case 0:
      return (
        <DatePicker
          label={"Pick Up Date"}
          date={pickupDate}
          onChange={(event) =>
            setPickupDate(
              new Date(event.target.value).toISOString().substr(0, 10)
            )
          }
        />
      );
    case 1:
      return (
        <DropOffComponent
          pickupDate={pickupDate}
          dropoffDate={dropoffDate}
          setDropoffDate={setDropoffDate}
          location={location}
          onLocationChange={(value) => setLocation(value)}
        />
      );
    case 2:
      return <AvailableVehicles pickupDate={pickupDate} dropoffDate={dropoffDate} locationId={location}/>;
    case 3:
      return "Confirmation Page";
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [pickupDate, setPickupDate] = React.useState(
    new Date().toISOString().substr(0, 10)
  );
  const [dropoffDate, setDropoffDate] = React.useState(
    new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)
  );

  const [location, setLocation] = React.useState("");

  const steps = getSteps();

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      props.history.push("/my-bookings");
    }

    if(activeStep + 1 === 2) {
        if(!location) {
            toast.error('Please select location');
            return;
        }
    }   
    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(
                activeStep,
                pickupDate,
                setPickupDate,
                dropoffDate,
                setDropoffDate,
                location,
                setLocation
              )}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
