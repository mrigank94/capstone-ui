import authService from "./auth.service";
import xhrService from "./xhr.service";
import queryString from "query-string";

const getAvailableVehicles = async (categoryName, location, pickupdate, dropoffDate) => {

    const stringified = queryString.stringify({
        categoryName,
        location,
        pickupdate,
        dropoffDate
    });
    return await xhrService.get(`http://localhost:3001/api/vehicles?${stringified}`, {
        headers: {
            'x-auth-header': authService.getToken()
        }
    });
}

export default {
    getAvailableVehicles
}