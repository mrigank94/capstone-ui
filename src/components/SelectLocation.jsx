import { useEffect, useState } from "react";
import Select from "react-select";
import xhrService from "../service/xhr.service";

const SelectLocation = ({ value, onChange }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocations() {
      try {
        const { data } = await xhrService.get(
          "http://localhost:3001/api/locations"
        );
        setLocations(data.map((el) => ({ value: el, label: el })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getLocations();
  }, []);

  return (
    <>
      <label>Select Location</label>
      <Select
        value={value}
        onChange={onChange}
        options={locations}
        label="Select Location"
      />
    </>
  );
};

export default SelectLocation;
