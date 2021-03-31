import React from "react";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useEffect } from "react";
import vehicleService from "../service/vehicle.service";
import SelectCategory from "./SelectCategory";

const AvailableVehicles = ({ pickupDate, dropoffDate, locationId }) => {
  const [vehicles, setVehicles] = React.useState([]);
  const [vehicleType, setVehicleType] = React.useState("car");
  const [categoryName, setCategoryName] = React.useState("");

  useEffect(() => {
    async function getAvailableVehicles() {
        const { data } = await vehicleService.getAvailableVehicles(
          categoryName.value,
          locationId.value,
          pickupDate,
          dropoffDate
        );
        setVehicles(data);

      console.log(pickupDate, dropoffDate, categoryName, locationId);
    }

    getAvailableVehicles();
  }, [pickupDate, dropoffDate, categoryName, locationId]);

  return (
    <>
      <FormLabel component="vehicle-type">Type</FormLabel>
      <RadioGroup
        aria-label="vehicle-type"
        name="vehicle-type"
        value={vehicleType}
        onChange={(event) => {
          setVehicleType(event.target.value);
          setCategoryName('');
        }}
      >
        <FormControlLabel value="car" control={<Radio />} label="Car" />
        <FormControlLabel value="bike" control={<Radio />} label="Bike" />
      </RadioGroup>
      <SelectCategory
        type={vehicleType}
        value={categoryName}
        onChange={(data) => setCategoryName(data)}
      />
      {JSON.stringify(vehicles)}
    </>
  );
};

export default AvailableVehicles;
