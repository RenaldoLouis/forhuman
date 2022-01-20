import api from "./HttpInit";

const baseApi = process.env.REACT_APP_BASE_API;

console.log("baseApi", baseApi)
const getProductData = async () => {
    try {
        const res = await api.get(`${baseApi}products/list`)
        if (res.status === 200) {
            const data = res.data
            return data;
        } else {
            return null
        }
    } catch (e) {
        return { error: e.message }
    }
};

const exportedObject = {
    getProductData
};

export default exportedObject;