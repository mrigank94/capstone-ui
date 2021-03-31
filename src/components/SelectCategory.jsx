import { useEffect, useState } from "react";
import Select from "react-select";
import xhrService from "../service/xhr.service";

const SelectCategory = ({ type, value, onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await xhrService.get(
          `http://localhost:3001/api/categories/${type}`
        );
        setCategories(data.map((el) => ({ value: el, label: el })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getCategories();
  }, [type]);

  return (
    <>
      <label>Select Category</label>
      <Select
        value={value}
        onChange={onChange}
        options={categories}
        label="Select Category"
      />
    </>
  );
};

export default SelectCategory;
