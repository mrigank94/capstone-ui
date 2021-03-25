import { useEffect, useState } from "react";
import authService from "../service/auth.service";
import courseService from "../service/course.service";

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const user = authService.getUser();

    useEffect(() => {  

        async function getAllCourses() {
            try {
                const {data} = await courseService.getRelatedCourses(user.persona, user._id);
                setCourses(data);
            } catch(ex) {
                console.log(ex.response)
            }
        }

        getAllCourses()
    }, []);

    return ( <div>{JSON.stringify(courses)}</div> );

}
 
export default MyCourses;