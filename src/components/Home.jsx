import { useEffect, useState } from "react";
import courseService from "../service/course.service";
import CourseCard from "./common/CourseCard";

const Home = (props) => {
  const [courses, setCourses] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function getAllCourses() {
      try {
        const { data } = await courseService.getAllCourses();
        console.log(courses);
        setCourses(data);
      } catch (ex) {
        console.log(ex.response);
      }
    }

    getAllCourses();
  }, []);

  return (
    <>
      <input
        type="text"
        name="fliter"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      />
      <div style={{ display: "flex" }}>
        {courses
          .filter((course) =>
            course.name.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((course) => (
            <CourseCard title={course.name} onDetailsClick={() => props.history.push(`/course-details/${course._id}`)}/>
          ))}
      </div>
    </>
  );
};

export default Home;
