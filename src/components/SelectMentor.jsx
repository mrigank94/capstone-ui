import { useEffect, useState } from "react";
import Select from "react-select";
import xhrService from "../service/xhr.service";

const SelectMentor = ({value, onChange}) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    async function getMentors() {
      try {
        const { data } = await xhrService.get(
          "http://localhost:3001/api/mentors"
        );
        setMentors(data.map((el) => ({ value: el._id, label: el.mentorId.name })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getMentors()
  }, []);

  return <Select value={value} onChange={onChange} options={mentors}  label='Select Mentor' />;
};

export default SelectMentor;
