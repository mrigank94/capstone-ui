import authService from "./auth.service";
import xhrService from "./xhr.service"

const getAllCourses = async () => {
    return await xhrService.get('http://localhost:3001/api/courses', {
        headers: {
            'x-auth-header': authService.getToken()
        }
    });
}

const getRelatedCourses = async (persona, id) => {
    const url = `http://localhost:3001/api/courses/${persona}s/${id}`
    return await xhrService.get(url, {
        headers: {
            'x-auth-header': authService.getToken()
        }
    });
}

export default {
    getAllCourses,
    getRelatedCourses
}