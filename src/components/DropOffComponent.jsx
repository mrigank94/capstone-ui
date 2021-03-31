import { Box, Typography } from "@material-ui/core";
import DatePicker from "./common/DatePicker";
import SelectLocation from "./SelectLocation";

const DropOffComponent = ({
  pickupDate,
  dropoffDate,
  setDropoffDate,
  location,
  onLocationChange,
}) => {
  return (
    <>
      <Typography
        style={{ padding: "8px" }}
        variant="h6"
      >{`Pick Up date : ${pickupDate}`}</Typography>
      <Box display="flex" width="40%" justifyContent="space-between" alignItems='center'>
        <DatePicker
          label={"Drop Off Date"}
          date={dropoffDate}
          onChange={(event) =>
            setDropoffDate(
              new Date(event.target.value).toISOString().substr(0, 10)
            )
          }
        />
        <Box width="50%">
          <SelectLocation value={location} onChange={onLocationChange} />
        </Box>
      </Box>
    </>
  );
};

export default DropOffComponent;
