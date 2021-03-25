const CourseDetails = (props) => {

    const id = props.match.params.id;
    return ( `Course Details ${id}` );
}
 
export default CourseDetails;