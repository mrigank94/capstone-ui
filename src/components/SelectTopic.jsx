import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import xhrService from "../service/xhr.service";

const SelectTopic = ({value, onChange}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function getTopics() {
      try {
        const { data } = await xhrService.get(
          "http://localhost:3001/api/courses//topics/all"
        );
        setTopics(data.map((el) => ({ value: el, label: el })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getTopics()
  }, []);

  return <CreatableSelect value={value} onChange={onChange} options={topics} label='Select Topic'/>;
};

export default SelectTopic;
