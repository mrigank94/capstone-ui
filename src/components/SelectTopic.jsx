import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

const SelectTopic = ({value, onChange}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function getTopics() {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/api/courses//topics/all"
        );
        setTopics(data.map((el) => ({ value: el, label: el })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getTopics()
  }, []);

  return <Select value={value} onChange={onChange} options={topics} label='Select Topic'/>;
};

export default SelectTopic;
